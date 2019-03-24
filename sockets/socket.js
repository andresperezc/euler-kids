let socket_io = require("socket.io");
let io = socket_io({ transports: ["websocket", "polling"] });
let socketApi = {};
socketApi.io = io;
const _ = require("lodash");
const moment = require("moment");
moment.locale("es");
const gamesData = require("../gamesJsonData/gamesDataHandler");
const shuffleFisher = require("../utilities/random").shuffleFisher;
const MONGO = require("../routes/mongoDb");
const db = require("../database/dbModule");
const redisIo = require("socket.io-redis");
io.adapter(redisIo({ host: "localhost", port: 6379 }));
const totalQuestions = gamesData => {
  return Promise.all(
    Object.values(gamesData).map(function(innerPromiseArray) {
      return innerPromiseArray();
    })
  ).then(data => {
    console.log("Total games = ", Intl.NumberFormat().format(data.length));
    let total = 0;
    for (let a of data) {
      total += a.length;
    }
    console.log("Total equations = ", Intl.NumberFormat().format(total));
  });
};
totalQuestions(gamesData);

// redis-server
// redis-cli --scan
// redis-cli flushall
// redis-cli CLIENT LIST
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
client.on("connect", () => {
  console.log("Redis client connected");
});
client.on("error", err => {
  console.log("Redis Error " + err);
});

const MapSetRedis = promisify(client.hmset).bind(client);
const DeleteRedis = promisify(client.del).bind(client);
const MapGetRedis = promisify(client.hgetall).bind(client);
const clientsRedis = (clients, MapGetRedis) => {
  return clients.map(e => {
    return MapGetRedis(e).then(data => {
      return data;
    });
  });
};
const clientsPointsRedis = (clients, creator) => {
  return clients
    .map(e => {
      return {
        avatar: e.avatar,
        username: e.username,
        points: e.points || 0,
        answered: e.answered || 0,
        team: e.team
      };
    })
    .filter(e => e.username !== creator);
};
const setPointsRedis = (MapSetRedis, socket, userPoints, totalAnswered) => {
  return MapSetRedis(socket.id, {
    points: userPoints,
    answered: totalAnswered
  });
};
const resetClientPointsRedis = (MapSetRedis, clients, moment) => {
  return clients.map(e => {
    return MapSetRedis(e, {
      points: 0,
      answered: 0,
      startedAt: moment().format("YYYY-MM-DD, h:mm:ss a")
    });
  });
};
const setTeamSelectedRedis = (MapSetRedis, socket, team) => {
  return MapSetRedis(socket.id, {
    team: team
  });
};
const roomGenerator = currentRooms => {
  return new Promise(resolve => {
    let notFound = true;
    let room = "";
    while (notFound) {
      const possible = "0123456789";
      for (let i = 0; i < 6; i++) {
        room += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      if (!currentRooms.includes(room)) {
        notFound = false;
      } else {
        room = "";
      }
    }

    resolve(room);
  });
};
const alreadyInRoom = (clients, socket) => {
  return clients.includes(socket.id);
};
const creator = "CreatorOfRoom@1234567890";

io.on("connection", socket => {
  console.log("socket conected");
  // Should be websocket
  // console.log(socket.conn.transport.name);

  socket.on("checkRooms", () => {
    const rooms = io.sockets.adapter.rooms;
    const currentRooms = [];
    for (let room in rooms) {
      currentRooms.push(room);
    }

    return currentRooms;
  });

  socket.on("generateRoomPing", data => {
    const rooms = io.sockets.adapter.rooms;
    const currentRooms = [];
    for (let room in rooms) {
      currentRooms.push(room);
    }
    const game = data.game.game;
    const date = moment().format("YYYY-MM-DD, h:mm:ss a");

    return roomGenerator(currentRooms)
      .then(room => {
        return Promise.all([
          room,
          // Si actualizamos setGameSettings, también tenemos que actualizar MapSetRedis en "join"
          MONGO.setGameSettings(db.get(), room, {
            createdAt: date,
            room: room,
            game: game,
            gameMode: data.gameMode,
            grade: data.grade,
            activity: data.activity,
            subject: data.subject,
            correctAnswersToWin: data.correctAnswersToWin,
            time: data.time,
            timePerQuestion: data.timePerQuestion,
            teamRed: data.teamRed,
            teamBlue: data.teamBlue,
            dir: data.dir,
            img: data.img,
            gradient: data.gradient
          })
        ]);
      })
      .then(data => {
        const room = _.chain(data)
          .nth(0)
          .value();
        socket.emit("goToRoomPong", room);
      });
  });

  socket.on("checkDuplicates", data => {
    const username = data.username;
    const room = data.room;
    io.in(room).clients((error, clients) => {
      if (error) throw error;
      return Promise.all(clientsRedis(clients, MapGetRedis)).then(clients => {
        for (let client of clients) {
          if (client.username === username) {
            return socket.emit("usernameTaken");
          }
        }

        socket.emit("okGo");
      });
    });
  });

  socket.on("checkIfRoomExistsPing", room => {
    const rooms = io.sockets.adapter.rooms;
    return rooms[room]
      ? socket.emit("checkIfRoomExistsPong")
      : socket.emit("checkIfRoomExistsPongError");
  });

  socket.on("join", data => {
    const room = data.room;
    const username = data.username;

    return MONGO.getGameSettings(db.get(), room).then(data => {
      const gameSettings = _.get(data, "settings", {});
      const gameStarted = _.get(data, "started", false);

      io.in(room).clients((error, clients) => {
        if (error) throw error;
        if (alreadyInRoom(clients, socket)) {
          // Si ya está en el room no cambiamos avatar
          // No lo volvemos a subscribir.
          return;
        }

        socket.username = username;
        socket.room = room;
        const avatarRandom = Math.floor(Math.random() * (7 - 1 + 1) + 1);
        return MapSetRedis(socket.id, {
          username: username,
          avatar: avatarRandom,
          room: gameSettings.room,
          grade: gameSettings.grade,
          game: gameSettings.game,
          gameMode: gameSettings.gameMode,
          activity: gameSettings.activity,
          subject: gameSettings.subject,
          correctAnswersToWin: gameSettings.correctAnswersToWin || 0,
          time: gameSettings.time,
          timePerQuestion: gameSettings.timePerQuestion,
          teamRed: gameSettings.teamRed || 0,
          teamBlue: gameSettings.teamBlue || 0,
          dir: gameSettings.dir,
          img: gameSettings.img,
          gradient: gameSettings.gradient
        }).then(() => {
          socket.join(room, error => {
            if (error) throw error;
            io.in(room).clients((error, clients) => {
              if (error) throw error;
              return Promise.all(clientsRedis(clients, MapGetRedis)).then(
                clientsRedis => {
                  if (gameStarted) {
                    // Enviamos las preguntas del juego
                    // y los game settings
                    socket.emit("gameStartedHurry", gameSettings);
                    io.to(room).emit(
                      "welcomePlayers",
                      clientsPointsRedis(clientsRedis, creator)
                    );
                    return;
                  }

                  // Mandamos los gameSettings al socket que entra
                  socket.emit("gameLoader", gameSettings);
                  // Actualizamos el lobby
                  io.to(room).emit(
                    "welcomePlayers",
                    clientsPointsRedis(clientsRedis, creator)
                  );
                }
              );
            });
          });
        });
      });
    });
  });

  socket.on("teamRed", room => {
    return setTeamSelectedRedis(MapSetRedis, socket, "teamRed").then(() => {
      io.in(room).clients((error, clients) => {
        if (error) throw error;
        return Promise.all(clientsRedis(clients, MapGetRedis)).then(
          clientsRedis => {
            io.to(room).emit(
              "welcomePlayers",
              clientsPointsRedis(clientsRedis, creator)
            );
          }
        );
      });
    });
  });

  socket.on("teamBlue", room => {
    return setTeamSelectedRedis(MapSetRedis, socket, "teamBlue").then(() => {
      io.in(room).clients((error, clients) => {
        if (error) throw error;
        return Promise.all(clientsRedis(clients, MapGetRedis)).then(
          clientsRedis => {
            io.to(room).emit(
              "welcomePlayers",
              clientsPointsRedis(clientsRedis, creator)
            );
          }
        );
      });
    });
  });

  socket.on("startGame", data => {
    const room = _.get(data, "room", false);
    const settings = _.get(data, "settings", false);
    if (room && settings) {
      io.in(room).clients((error, clients) => {
        if (error) throw error;
        const game = settings.game.game;
        const questionsMaster = _.get(gamesData, game, false);
        if (!questionsMaster) {
          return;
        }

        // Reseteamos los questions en Db
        return Promise.all([
          questionsMaster(),
          MONGO.resetGameAnalytics(db.get(), room)
        ])
          .then(data => {
            const questions = _.chain(data)
              .nth(0)
              .value();

            // Ingresamos las preguntas a setGameQuestions
            // Reseteamos los puntos del usuario
            return Promise.all([
              resetClientPointsRedis(MapSetRedis, clients, moment),
              MONGO.setGameQuestions(
                db.get(),
                room,
                shuffleFisher(questions).slice(0, 100)
              )
            ]);
          })
          .then(() => {
            io.to(room).emit("startNow");
          });
      });
    }
  });

  socket.on("gameStartedTruePing", room => {
    const gameStartsAt = Date.now();

    return Promise.all([
      MONGO.getGameSettings(db.get(), room),
      MONGO.setGameStartedTrue(db.get(), room, gameStartsAt)
    ]).then(data => {
      const questions = _.chain(data)
        .nth(0)
        .get("settings.questions", [])
        .value();

      io.to(room).emit("gameStartedTruePong", {
        startTime: gameStartsAt,
        questions: questions
      });
    });
  });

  socket.on("getPlayersAction", room => {
    io.in(room).clients((error, clients) => {
      if (error) throw error;
      // Necesario enviar a todos para actualizar los places
      return Promise.all(clientsRedis(clients, MapGetRedis)).then(clients => {
        socket.emit("welcomePlayers", clientsPointsRedis(clients, creator));
      });
    });
  });

  socket.on("sendPoints", data => {
    const room = data.room;
    const userPoints = data.points;
    const totalAnswered = data.answered;

    io.in(room).clients((error, clients) => {
      if (error) throw error;
      return setPointsRedis(MapSetRedis, socket, userPoints, totalAnswered)
        .then(() => {
          return Promise.all(clientsRedis(clients, MapGetRedis));
        })
        .then(clientsRedis => {
          io.to(room).emit(
            "welcomePlayers",
            clientsPointsRedis(clientsRedis, creator)
          );

          if (
            data.gameMode === "Rocket Race" &&
            totalAnswered >= data.correctAnswersToWin
          ) {
            return Promise.all([
              MONGO.setGameStartedFalse(db.get(), room)
            ]).then(() => {
              io.to(room).emit("gameFinished");
            });
          }
        });
    });
  });

  socket.on("gameFinishedPing", room => {
    io.in(room).clients((error, clients) => {
      if (error) throw error;

      return Promise.all(clientsRedis(clients, MapGetRedis))
        .then(clientsRedis => {
          io.to(room).emit(
            "welcomePlayers",
            clientsPointsRedis(clientsRedis, creator)
          );

          return Promise.all([MONGO.setGameStartedFalse(db.get(), room)]);
        })
        .then(() => {
          io.to(room).emit("gameFinished");
        });
    });
  });

  socket.on("gameDataDb", data => {
    const date = moment().format("YYYY-MM-DD");
    const finishedAt = {
      finishedAt: moment().format("YYYY-MM-DD, h:mm:ss a")
    };
    const gameSettings = Object.assign(finishedAt, data);
    return MONGO.appDailyUsage(db.get(), date, gameSettings);
  });

  socket.on("gameAnalyticsPing", data => {
    const room = data.room;
    const questionsSolved = data.questionsSolved;
    const finalInc = {};
    const finalSet = {};
    const finalAddToSet = {};
    const finalPush = {};

    if (!questionsSolved.length) {
      return;
    }

    for (let i = 0; i < questionsSolved.length; i++) {
      const inc = {
        [`questions.${questionsSolved[i].id}.solved`]: questionsSolved[i].missed
          ? 0
          : 1,
        [`questions.${questionsSolved[i].id}.missed`]: questionsSolved[i].missed
          ? 1
          : 0
      };
      const set = {
        [`questions.${questionsSolved[i].id}.operation`]: questionsSolved[i]
          .question.operation,
        [`questions.${questionsSolved[i].id}.correctAnswer`]: questionsSolved[i]
          .question.correct
      };
      const addToSet = {
        [`questions.${questionsSolved[i].id}.missedBy`]: questionsSolved[i]
          .missed
          ? socket.username
          : false
      };
      const push = {
        [`questions.${questionsSolved[i].id}.time`]: questionsSolved[i].time
      };

      Object.assign(finalInc, inc);
      Object.assign(finalSet, set);
      Object.assign(finalAddToSet, addToSet);
      Object.assign(finalPush, push);
    }

    return MONGO.gameAnalytics(
      db.get(),
      room,
      finalSet,
      finalInc,
      finalAddToSet,
      finalPush
    ).then(docs => {
      // Aquí mandamos la de la db editada al room
      const data = docs.value;
      const missedQuestions = questions => {
        return Object.values(questions)
          .filter(e => e.missed)
          .map(e => {
            return {
              correctAnswer: e.correctAnswer,
              operation: e.operation,
              missedBy: e.missedBy.filter(e => e)
            };
          });
      };
      const totalSolved = questions => {
        return Object.values(questions).reduce((a, b) => a + b.solved, 0);
      };
      const averageTimePerQuestion = questions => {
        const length = Object.values(questions)
          .map(e => e.time)
          .reduce((a, b) => a.concat(b)).length;
        const value = Object.values(questions)
          .map(e => e.time)
          .reduce((a, b) => a.concat(b)) // flatten array
          .reduce((a, b) => a + b, 0);

        return Math.floor((value / length) * 10) / 10;
      };

      io.to(room).emit("GAME_ANALYTICS_PONG", {
        missedQuestions: missedQuestions(data.questions),
        totalSolved: totalSolved(data.questions),
        averageTimePerQuestion: averageTimePerQuestion(data.questions)
      });
    });
  });

  socket.on("unsubscribe", room => {
    socket.leave(room, error => {
      if (error) throw error;
      io.in(room).clients((error, clients) => {
        if (error) throw error;
        return Promise.all(clientsRedis(clients, MapGetRedis))
          .then(clientsRedis => {
            return DeleteRedis(socket.id).then(() => {
              io.to(room).emit(
                "welcomePlayers",
                clientsPointsRedis(clientsRedis, creator)
              );
            });
          })
          .catch(error => {
            console.log("unsusbscribe error = ", error);
          });
      });
    });
  });

  socket.on("unsubscribeAndAllGetOut", room => {
    socket.leave(room, error => {
      if (error) throw error;
      DeleteRedis(socket.id).then(() => {
        io.to(room).emit("allGetOut");
      });
    });
  });

  socket.on("disconnect", () => {
    console.log("disconnect");
    const room = socket.room;

    io.in(room).clients((error, clients) => {
      if (error) throw error;
      return Promise.all(clientsRedis(clients, MapGetRedis))
        .then(clientsRedis => {
          return DeleteRedis(socket.id).then(() => {
            if (socket.username === creator) {
              return io.to(room).emit("allGetOut");
            }

            io.to(room).emit(
              "welcomePlayers",
              clientsPointsRedis(clientsRedis, creator)
            );
          });
        })
        .catch(error => {
          console.log("disconnect error = ", error);
        });
    });
  });
});

setInterval(function() {
  io.emit("MASTER_CLOCK", Date.now());
}, 1000);

module.exports = socketApi;
