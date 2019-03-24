import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    JoinTheGame: () => import("../components/JoinTheGame"),
    LobbyActionGameImg: () => import("../components/LobbyActionGameImg"),
    ModePlayersTime: () => import("../components/ModePlayersTime"),
    ClassroomRushList: () => import("../components/Lists/ClassroomRushList"),
    RocketRaceList: () => import("../components/Lists/RocketRaceList"),
    ClickButtonToRegister: () => import("../components/ClickButtonToRegister"),
    ScoreTimePlace: () => import("../components/Action/ScoreTimePlaceAction"),
    RoomRules: () => import("../components/Lobby/RoomRules"),
    Winners: () => import("../components/Lobby/Winners"),
    GameAlreadyStarted: () => import("../components/Lobby/GameAlreadyStarted"),
    GameStartsInDialog: () => import("../components/Lobby/GameStartsInDialog"),
    StartGameButton: () => import("../components/Lobby/StartGameButton"),
    GameAnalytics: () => import("../components/Lobby/GameAnalytics"),
    GameReviewBtn: () => import("../components/Lobby/GameReviewBtn"),
    SpaceBattleTeamBar: () => import("../components/SpaceBattle/TeamsBar"),
    SpaceBattleTeamLists: () => import("../components/SpaceBattle/TeamLists"),
    SpaceBattleChooseYourTeam: () =>
      import("../components/SpaceBattle/ChooseYourTeam")
  },
  methods: {
    gameImgFun(dir, img) {
      return require(`@/assets/Create/${dir}/${img}.svg`);
    },
    avatarsImg(img) {
      return require(`@/assets/Avatars/${img}.svg`);
    },
    winnersImg(img) {
      return require(`@/assets/Winners/${img}.svg`);
    },
    classList(index) {
      return index % 2 === 0 ? "grey lighten-4" : "";
    },
    timeFormat(seconds) {
      const minutes = (seconds % 3600) / 60;
      seconds %= 60;
      const format = val => {
        return ("0" + Math.floor(val)).slice(-2);
      };

      return [minutes, seconds].map(format).join(":");
    },
    secondsFormat(seconds) {
      seconds %= 60;
      const format = val => {
        return ("0" + Math.floor(val)).slice(-2);
      };

      return [seconds].map(format).join(":");
    },
    secondsText(seconds) {
      return seconds === 1 ? "second" : "seconds";
    },
    rocketRacePercentage(correctAnswersToWin, userAnswered) {
      if (!correctAnswersToWin) {
        return 0;
      }

      return (userAnswered * 100) / correctAnswersToWin;
    },
    rocketRaceBarColor(rocketPercentage) {
      if (rocketPercentage < 20) {
        return "pink";
      }

      if (rocketPercentage >= 20 && rocketPercentage < 50) {
        return "amber";
      }

      if (rocketPercentage >= 50 && rocketPercentage < 100) {
        return this.styles.color;
      }

      if (rocketPercentage >= 100) {
        return this.styles.green;
      }
    },
    timePerQuestionClass(timePerQuestion) {
      return timePerQuestion <= 5 ? "pink--text" : this.styles.textColor;
    },
    resetGame() {
      this.$store.dispatch("resetGame");
    }
  },
  computed: {
    ...mapState([
      "authenticated",
      "styles",
      "gameNickname",
      "gamesCreated",
      "EKCode",
      "gameSettings",
      "timesPlayed",
      "gameFinished",
      "seconds",
      "answered",
      "timePerQuestion",
      "timePerQuestionReadOnly",
      "gameStarted",
      "players",
      "teamRedPlayers",
      "teamBluePlayers",
      "teamRed",
      "teamBlue",
      "teamSelected",
      "winners",
      "counter",
      "points",
      "timerId",
      "roomGameMode",
      "correctAnswersToWin",
      "gameImg",
      "gameAnalytics",
      "spaceBattleFinalPercentage"
    ]),
    ...mapGetters([
      "place",
      "timePerQuestionSetting",
      "gameIsActive",
      "gameToPlay",
      "classroomRush",
      "classroomRushRules",
      "rocketRace",
      "rocketRaceRules",
      "spaceBattle",
      "spaceBattleRules",
      "isCreator",
      "teamRedPoints",
      "teamBluePoints",
      "spaceBattleMasterPercentage"
    ]),
    haveCredentials() {
      return this.isCreator || this.gameNickname;
    },
    teams() {
      return [
        {
          dir: "Games",
          img: "teamRed",
          color: "grey lighten-4",
          name: this.teamRed,
          points: this.teamRedPoints
        },
        {
          dir: "Games",
          img: "teamBlue",
          color: "grey lighten-4",
          name: this.teamBlue,
          points: this.teamBluePoints
        }
      ];
    },
    spaceBattleProgressVisible() {
      if (this.isCreator) {
        return true;
      }

      return this.teamSelected;
    },
    spaceBattlePercentage() {
      if (!this.gameIsActive) {
        return this.spaceBattleFinalPercentage;
      }

      if (!this.teamRedPoints && !this.teamBluePoints) {
        return 50;
      }

      return this.spaceBattleMasterPercentage;
    },
    spaceBattleTotalPlayers() {
      return this.teamRedPlayers.length + this.teamBluePlayers.length;
    }
  }
};
