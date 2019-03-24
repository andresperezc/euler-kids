import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import get from "lodash.get";
Vue.use(Vuex);
const timeSwitch = string => {
  switch (string) {
    case "1 min":
      return 60;
    case "2 min":
      return 120;
    case "3 min":
      return 180;
    case "4 min":
      return 240;
    case "5 min":
      return 300;
    case "10 sec":
      return 10;
    case "15 sec":
      return 15;
    case "20 sec":
      return 20;
    case "30 sec":
      return 30;
    case "Unlimited":
      return false;
    case false:
      return false;
  }
};
const shuffleFisher = array => {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

export default new Vuex.Store({
  state: {
    Dev: false,
    appVersion: "0.01",
    username: null,
    role: null,
    token: null,
    authenticated: false,
    dialog: false,
    styles: {
      color: "blue darken-1",
      text: "grey--text text--darken-3",
      textColor: "blue--text text--darken-1",
      successColor: "blue darken-1",
      green: "green accent-4",
      textGreen: "green--text text-accent-4",
      textRed: "pink--text",
      red: "pink"
    },
    serverMsg: null,
    serverErrors: [],
    //*** Game
    EKCode: null,
    gamesCreated: [],
    gameNickname: null,
    gameSettings: null,
    startTime: 0,
    gameFinished: false,
    points: 0,
    counter: 0,
    timesPlayed: 0,
    seconds: 0,
    gameStarted: false,
    answered: 0,
    players: [],
    teamRedPlayers: [],
    teamBluePlayers: [],
    teamRed: null,
    teamBlue: null,
    teamSelected: null,
    spaceBattleFinalPercentage: 50,
    winners: [],
    winnersVisible: false,
    timePerQuestion: 0,
    timePerQuestionReadOnly: 0,
    timerId: null,
    roomGameMode: null,
    correctAnswersToWin: null,
    gameImg: null,
    randomQuestions: [],
    questionsSolved: [],
    gameAnalytics: null,
    showPoints: false,
    missed: false
  },
  mutations: {
    authorized(state, payload) {
      state.authenticated = true;
      state.token = payload.token;
      state.username = payload.username;
      state.role = payload.role;
    },
    notAuthorized(state) {
      state.authenticated = false;
      state.token = null;
      state.username = null;
      state.role = null;
    },
    dialogPayload(state, payload) {
      state.dialog = payload;
    },
    serverMsgPayload(state, payload) {
      state.serverMsg = payload.message;
      state.serverErrors = payload.errors;
    },
    gameNicknameAssigner(state, payload) {
      state.gameNickname = payload;
    },
    gamesCreatedPush(state, payload) {
      state.gamesCreated.push(payload);
    },
    gamesCreatedReset(state) {
      state.gamesCreated = [];
    },
    EKCodeAssigner(state, payload) {
      state.EKCode = payload;
    },
    gameSettingsAssigner(state, payload) {
      state.gameSettings = payload;
    },
    gameFinishedSet(state, payload) {
      state.gameFinished = payload;
    },
    incCounter(state, payload) {
      state.counter += payload;
    },
    resetCounter(state) {
      state.counter = 0;
    },
    addPoints(state, payload) {
      state.points += payload;
    },
    decrementPoints(state, payload) {
      return state.points > 0 ? (state.points -= payload) : state.points;
    },
    resetPoints(state) {
      state.points = 0;
    },
    timesPlayedSet(state, payload) {
      state.timesPlayed = payload;
    },
    secondsInc(state, payload) {
      state.seconds = payload;
    },
    gameStartedSet(state, payload) {
      state.gameStarted = payload;
    },
    answeredInc(state, payload) {
      state.answered += payload;
    },
    resetAnswered(state) {
      state.answered = 0;
    },
    playersUpdate(state, payload) {
      state.players = payload.sort((a, b) => b.points - a.points);
    },
    getWinners(state, payload) {
      state.winners = payload;
    },
    winnersVisibleSet(state, payload) {
      state.winnersVisible = payload;
    },
    timePerQuestionSet(state, payload) {
      state.timePerQuestion = payload;
    },
    timePerQuestionDecrement(state, payload) {
      return state.timePerQuestion === 0
        ? (state.timePerQuestion = payload)
        : (state.timePerQuestion -= 1);
    },
    timerSet(state, payload) {
      state.timerId = payload;
    },
    roomGameModeSet(state, payload) {
      state.roomGameMode = payload;
    },
    correctAnswersToWinSet(state, payload) {
      state.correctAnswersToWin = payload;
    },
    timePerQuestionReadOnlySet(state, payload) {
      state.timePerQuestionReadOnly = payload;
    },
    gameImgSet(state, payload) {
      state.gameImg = payload;
    },
    startTimeSet(state, payload) {
      state.startTime = payload;
    },
    randomQuestionsSet(state, payload) {
      state.randomQuestions = payload;
    },
    questionsSolvedSet(state, payload) {
      state.questionsSolved.push(payload);
    },
    questionsSolvedReset(state) {
      state.questionsSolved = [];
    },
    gameAnalyticsSet(state, payload) {
      state.gameAnalytics = payload;
    },
    showPointsSet(state, payload) {
      state.showPoints = payload.showPoints;
      state.missed = payload.missed;
    },
    teamsNameSet(state, payload) {
      state.teamRed = payload.teamRed;
      state.teamBlue = payload.teamBlue;
    },
    teamSelectedSet(state, payload) {
      state.teamSelected = payload;
    },
    teamRedUpdate(state, payload) {
      state.teamRedPlayers = payload.sort((a, b) => b.points - a.points);
    },
    teamBlueUpdate(state, payload) {
      state.teamBluePlayers = payload.sort((a, b) => b.points - a.points);
    },
    spaceBattleFinalPercentageSet(state, payload) {
      state.spaceBattleFinalPercentage = payload;
    },
    shuffleQuestions(state) {
      return shuffleFisher(state.randomQuestions);
    }
  },
  getters: {
    gameIsActive: state => {
      return !state.gameFinished && state.gameStarted;
    },
    secondsMaster: state => {
      return timeSwitch(get(state.gameSettings, "time", 0));
    },
    timePerQuestionSetting: state => {
      return timeSwitch(get(state.gameSettings, "timePerQuestion", 0));
    },
    gameToPlay: state => {
      return get(state.gameSettings, "game", false);
    },
    gameMode: state => {
      return get(state.gameSettings, "gameMode", false);
    },
    questions: state => {
      return state.randomQuestions;
    },
    classroomRush(state, getters) {
      return getters.gameMode === "Classroom Rush";
    },
    classroomRushRules: state => {
      return state.roomGameMode === "Classroom Rush";
    },
    rocketRace(state, getters) {
      return getters.gameMode === "Rocket Race";
    },
    rocketRaceRules: state => {
      return state.roomGameMode === "Rocket Race";
    },
    spaceBattle(state, getters) {
      return getters.gameMode === "Space Battle";
    },
    spaceBattleRules: state => {
      return state.roomGameMode === "Space Battle";
    },
    teamRedPoints: state => {
      return state.teamRedPlayers
        .map(item => {
          return Number(item.points);
        })
        .reduce((a, b) => a + b, 0);
    },
    teamRedAnswered: state => {
      return state.teamRedPlayers
        .map(item => {
          return Number(item.answered);
        })
        .reduce((a, b) => a + b, 0);
    },
    teamBluePoints: state => {
      return state.teamBluePlayers
        .map(item => {
          return Number(item.points);
        })
        .reduce((a, b) => a + b, 0);
    },
    teamBlueAnswered: state => {
      return state.teamBluePlayers
        .map(item => {
          return Number(item.answered);
        })
        .reduce((a, b) => a + b, 0);
    },
    spaceBattleTotalPoints(state, getters) {
      return Number(getters.teamRedPoints) + Number(getters.teamBluePoints);
    },
    teamRedPercentage(state, getters) {
      return (getters.teamRedPoints * 50) / getters.spaceBattleTotalPoints;
    },
    teamBluePercentage(state, getters) {
      return (getters.teamBluePoints * 50) / getters.spaceBattleTotalPoints;
    },
    spaceBattleMasterPercentage(state, getters) {
      return 50 + getters.teamRedPercentage - getters.teamBluePercentage;
    },
    place: state => {
      return (
        state.players.findIndex(i => i.username === state.gameNickname) + 1
      );
    },
    isCreator: state => {
      return !!state.gamesCreated.find(x => x.room === state.EKCode);
    }
  },
  actions: {
    inkMaster({ commit }) {
      commit("incCounter", 1);
      commit("addPoints", 2);
      commit("answeredInc", 1);
    },
    timePerQuestionMaster({ state, commit, getters }) {
      if (state.timePerQuestion !== false) {
        commit(
          "timerSet",
          setInterval(() => {
            commit("timePerQuestionDecrement", getters.timePerQuestionSetting);
            // Cambia la pregunta cuando llega a cero
            if (state.timePerQuestion === 0) {
              // Animación de puntos
              commit("showPointsSet", {
                showPoints: true,
                missed: true
              });

              // Restamos un punto si es Classroom Rush o Space Battle
              if (getters.classroomRush || getters.spaceBattle) {
                commit("decrementPoints", 1);
              }

              const data = {
                room: state.EKCode,
                points: state.points,
                answered: state.answered,
                gameMode: getters.gameMode,
                correctAnswersToWin: state.correctAnswersToWin
              };

              commit("questionsSolvedSet", {
                id: getters.questions[state.counter].id,
                question: getters.questions[state.counter], // mandamos la pregunta que contestó. Una anterior
                time: getters.timePerQuestionSetting,
                missed: true
              });

              if (!getters.isCreator && getters.gameIsActive) {
                let audio = new Audio(require("@/assets/Audio/wrongBuzz.mp3"));
                audio.volume = 0.5;
                audio.play();

                this._vm.$socket.emit("sendPoints", data);
              }

              // Avanzamos a la siguiente pregunta
              commit("incCounter", 1);
            }
          }, 1000)
        );
      }
    },
    clearTimer({ commit, state }) {
      clearInterval(state.timerId);
      commit("timerSet", null);
    },
    SOCKET_MASTER_CLOCK({ state, commit, getters }, DateNow) {
      if (state.gameStarted) {
        const now = (DateNow - state.startTime) / 10;
        let count = getters.secondsMaster * 100 - Math.floor(now);

        if (getters.rocketRace && state.gameFinished) {
          return;
        }

        if (count / 100 >= 0) {
          commit("secondsInc", count / 100);
        }

        if (count < 0 && !state.gameFinished) {
          commit("secondsInc", 0);
          commit("gameFinishedSet", true);
        }
      }
    },
    gameLoader({ commit }, gameSettings) {
      if (gameSettings.started) {
        commit("gameFinishedSet", false);
        commit("gameStartedSet", true);
      }
      commit("gameSettingsAssigner", gameSettings);
      commit("roomGameModeSet", gameSettings.gameMode);
      commit("correctAnswersToWinSet", gameSettings.correctAnswersToWin);
      commit("secondsInc", timeSwitch(gameSettings.time));
      commit(
        "timePerQuestionReadOnlySet",
        timeSwitch(gameSettings.timePerQuestion)
      );
      commit("gameImgSet", {
        dir: gameSettings.dir,
        img: gameSettings.img,
        gradient: gameSettings.gradient
      });
      commit("teamsNameSet", {
        teamRed: gameSettings.teamRed,
        teamBlue: gameSettings.teamBlue
      });
    },
    gameStartedTrue({ commit, getters, dispatch }, payload) {
      commit("randomQuestionsSet", payload.questions);
      commit("startTimeSet", payload.startTime);
      commit("gameStartedSet", true);
      commit("gameFinishedSet", false);
      commit("resetPoints");
      commit("resetCounter");
      commit("resetAnswered");
      commit("timesPlayedSet", 1);
      commit("winnersVisibleSet", false);
      commit("getWinners", []);
      commit("timePerQuestionSet", getters.timePerQuestionSetting);
      dispatch("timePerQuestionMaster");
      commit("questionsSolvedReset");
      commit("gameAnalyticsSet", null);
      commit("teamRedUpdate", []);
      commit("teamBlueUpdate", []);
      commit("spaceBattleFinalPercentageSet", 50);
    },
    gameFinishedMaster({ state, getters, commit, dispatch }) {
      commit("gameFinishedSet", true);
      commit("gameStartedSet", false);
      commit("winnersVisibleSet", true);
      dispatch("clearTimer");
      let audio = new Audio(require("@/assets/Audio/finished.mp3"));
      audio.volume = 0.1;
      audio.play();

      if (getters.spaceBattle) {
        if (!getters.teamRedPoints && !getters.teamBluePoints) {
          commit("spaceBattleFinalPercentageSet", 50);
        } else {
          commit(
            "spaceBattleFinalPercentageSet",
            getters.spaceBattleMasterPercentage
          );
        }

        if (getters.teamBluePoints > getters.teamRedPoints) {
          const winners = [
            {
              img: "first",
              username: state.teamBlue,
              points: getters.teamBluePoints,
              answered: getters.teamBlueAnswered,
              draw: false,
              usernameColor: state.styles.textColor
            }
          ];
          commit("getWinners", winners);
        }

        if (getters.teamRedPoints > getters.teamBluePoints) {
          const winners = [
            {
              img: "first",
              username: state.teamRed,
              points: getters.teamRedPoints,
              answered: getters.teamRedAnswered,
              draw: false,
              usernameColor: state.styles.textRed
            }
          ];
          commit("getWinners", winners);
        }

        if (getters.teamRedPoints === getters.teamBluePoints) {
          const winners = [
            {
              img: "draw",
              username: "",
              points: false,
              answered: false,
              draw: true,
              usernameColor: state.styles.textColor
            }
          ];
          commit("getWinners", winners);
        }
      } else {
        // Obtenemos lista de winners - Classroom Rush y Rocket Race
        // Points y answered se convierten a Number. Redis los convierte a string
        const order = ["second", "first", "third"];
        const winners = state.players
          .slice(0, 3)
          .map((current, index) => {
            const imgs = ["first", "second", "third"];
            return {
              img: imgs[index],
              username: current.username,
              points: Number(current.points),
              answered: Number(current.answered)
            };
          })
          .sort((a, b) => order.indexOf(a.img) - order.indexOf(b.img))
          .filter(e => e.points);

        commit("getWinners", winners);
      }

      // Aquí mandamos los analytics del ejercicio por jugador al backend
      if (!getters.isCreator) {
        this._vm.$socket.emit("gameAnalyticsPing", {
          room: state.EKCode,
          questionsSolved: state.questionsSolved
        });
      }

      // El Creator manda todos los datos del juego a Mongo
      if (getters.isCreator) {
        this._vm.$socket.emit("gameDataDb", {
          room: state.EKCode,
          gameSettings: state.gameSettings,
          totalPlayers: state.players.length,
          players: state.players,
          winners: state.winners
        });
      }
    },
    SOCKET_GAME_ANALYTICS_PONG({ commit }, payload) {
      commit("gameAnalyticsSet", {
        missedQuestions: payload.missedQuestions,
        totalSolved: payload.totalSolved,
        averageTimePerQuestion: payload.averageTimePerQuestion
      });
    },
    resetGame({ commit }) {
      commit("EKCodeAssigner", null);
      commit("gamesCreatedReset");
      commit("gameNicknameAssigner", null);
      commit("gameSettingsAssigner", null);
      commit("gameFinishedSet", false);
      commit("resetPoints");
      commit("resetCounter");
      commit("timesPlayedSet", 0);
      commit("secondsInc", 0);
      commit("gameStartedSet", false);
      commit("resetAnswered");
      commit("playersUpdate", []);
      commit("getWinners", []);
      commit("timePerQuestionSet", 0);
      commit("timePerQuestionReadOnlySet", 0);
      commit("roomGameModeSet", null);
      commit("correctAnswersToWinSet", null);
      commit("gameImgSet", null);
      commit("startTimeSet", 0);
      commit("randomQuestionsSet", []);
      commit("questionsSolvedReset");
      commit("gameAnalyticsSet", null);
      commit("showPointsSet", {
        showPoints: false,
        missed: false
      });
      commit("teamsNameSet", {
        teamRed: null,
        teamBlue: null
      });
      commit("teamSelectedSet", null);
      commit("teamRedUpdate", []);
      commit("teamBlueUpdate", []);
      commit("spaceBattleFinalPercentageSet", 50);
    },
    resetServerMsg({ commit }) {
      commit("serverMsgPayload", {
        message: null,
        errors: []
      });
    },
    getServerMsgError({ commit }, payload) {
      commit("serverMsgPayload", {
        message: payload.response.data.message,
        errors: payload.response.data.errors
      });
    },
    getServerMsgSuccess({ commit }, payload) {
      commit("serverMsgPayload", {
        message: payload.data.message,
        errors: []
      });
    },
    signUp({ state, commit, dispatch }, payload) {
      dispatch("resetServerMsg");

      return new Promise((resolve, reject) => {
        axios
          .post("/signUp", {
            username: payload.username,
            password: payload.password,
            email: payload.email,
            role: payload.role,
            origin: window.location.origin,
            appVersion: state.appVersion
          })
          .then(response => {
            commit("authorized", response.data);
            resolve(response);
          })
          .catch(error => {
            commit("notAuthorized");
            dispatch("getServerMsgError", error);
            reject(error);
          });
      });
    },
    login({ state, commit, dispatch }, payload) {
      dispatch("resetServerMsg");

      return new Promise((resolve, reject) => {
        axios
          .post("/login", {
            username: payload.username,
            password: payload.password,
            appVersion: state.appVersion
          })
          .then(response => {
            commit("authorized", response.data);
            resolve(response);
          })
          .catch(error => {
            commit("notAuthorized");
            dispatch("getServerMsgError", error);
            reject(error);
          });
      });
    },
    checkAppVersion() {
      return new Promise((resolve, reject) => {
        axios
          .post("/checkAppVersion")
          .then(response => {
            resolve(response.data.appVersion);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
});
