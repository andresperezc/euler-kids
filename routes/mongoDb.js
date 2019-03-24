module.exports = {
  createIndexUser(db) {
    const collection = db.collection("users");

    return collection.createIndex(
      {
        username: 1
      },
      {
        unique: true
      }
    );
  },
  createIndexUserRole(db) {
    const collection = db.collection("users");

    return collection.createIndex({
      role: 1
    });
  },
  createIndexEmail(db) {
    const collection = db.collection("users");

    return collection.createIndex(
      {
        email: 1
      },
      {
        unique: true
      }
    );
  },
  createIndexAppDailyUsage(db) {
    const collection = db.collection("appDailyUsage");

    return collection.createIndex(
      {
        date: 1
      },
      {
        unique: true
      }
    );
  },
  gameAnalytics(db, room, set, inc, addToSet, push) {
    const collection = db.collection("Games");

    return collection.findOneAndUpdate(
      {
        room: room
      },
      {
        $push: push,
        $addToSet: addToSet,
        $set: set,
        $inc: inc
      },
      {
        returnOriginal: false,
        upsert: true
      }
    );
  },
  resetGameAnalytics(db, room) {
    const collection = db.collection("Games");

    return collection.updateOne(
      {
        room: room
      },
      {
        $unset: {
          questions: ""
        }
      }
    );
  },
  setGameSettings(db, room, settings) {
    const collection = db.collection("GameSettings");

    return collection.updateOne(
      {
        room: room
      },
      {
        $set: {
          settings: settings
        }
      },
      {
        upsert: true
      }
    );
  },
  setGameQuestions(db, room, questions) {
    const collection = db.collection("GameSettings");

    return collection.updateOne(
      {
        room: room
      },
      {
        $set: {
          "settings.questions": questions
        }
      }
    );
  },
  setGameStartedTrue(db, room, startTime) {
    const collection = db.collection("GameSettings");

    return collection.updateOne(
      {
        room: room
      },
      {
        $set: {
          started: true,
          "settings.startTime": startTime
        }
      }
    );
  },
  setGameStartedFalse(db, room) {
    const collection = db.collection("GameSettings");

    return collection.updateOne(
      {
        room: room
      },
      {
        $set: {
          started: false
        }
      }
    );
  },
  getGameSettings(db, room) {
    const collection = db.collection("GameSettings");

    return collection.findOne(
      {
        room: room
      },
      {
        $set: {
          started: false
        }
      }
    );
  },
  appDailyUsage(db, date, gameSettings) {
    const collection = db.collection("appDailyUsage");

    return collection.updateOne(
      {
        date: date
      },
      {
        $inc: {
          total: 1
        },
        $push: {
          games: gameSettings
        }
      },
      {
        upsert: true
      }
    );
  }
};
