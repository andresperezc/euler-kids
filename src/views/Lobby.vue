<template>
  <v-container grid-list-md>
    <div v-if="haveCredentials">
      <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2 lg6 offset-lg3 xl4 offset-xl4>
          <v-card>
            <JoinTheGame :e-k-code="EKCode" :styles="styles" />
            <StartGameButton
              v-if="isCreator"
              :game-started="gameStarted"
              :disabled="disabled"
              :spinner="spinner"
              :styles="styles"
              :start-game="startGame"
              :start-game-text="startGameText"
              :times-played="timesPlayed"
            />
            <GameAlreadyStarted
              v-if="gameStarted"
              :styles="styles"
              :game-already-started-disabled="gameAlreadyStartedDisabled"
              :e-k-code="EKCode"
            />
            <GameReviewBtn
              v-if="gameAnalytics && !gameIsActive"
              :styles="styles"
              :game-analytics-toggle="gameAnalyticsToggle"
              :game-review-text="gameReviewText"
              :show-game-analytics="showGameAnalytics"
            />
          </v-card>
        </v-flex>
        <v-flex
          xs12
          sm8
          offset-sm2
          md6
          offset-md3
          xl4
          offset-xl4
          v-if="winnersVisible"
        >
          <Winners
            :winners="winners"
            :img="winnersImg"
            :styles="styles"
            :classroom-rush-rules="classroomRushRules"
            :rocket-race-rules="rocketRaceRules"
            :space-battle-rules="spaceBattleRules"
          />
        </v-flex>
        <v-flex
          xs12
          sm8
          offset-sm2
          md8
          offset-md2
          lg6
          offset-lg3
          xl4
          offset-xl4
        >
          <v-card>
            <LobbyActionGameImg
              v-if="gameImg"
              :img="gameImgFun"
              :gameImg="gameImg"
            />
            <RoomRules
              :classroom-rush-rules="classroomRushRules"
              :rocket-race-rules="rocketRaceRules"
              :space-battle-rules="spaceBattleRules"
              :styles="styles"
              :correct-answers-to-win="correctAnswersToWin"
              :time-per-question-read-only="timePerQuestionReadOnly"
            />
            <ModePlayersTime
              :room-game-mode="roomGameMode"
              :players="players"
              :time-format="timeFormat"
              :seconds="seconds"
              :time-per-question-class="timePerQuestionClass"
              :styles="styles"
              :space-battle-total-players="spaceBattleTotalPlayers"
            />
            <ClassroomRushList
              v-if="classroomRushListVisible"
              :subheader="subheader"
              :players="players"
              :img="avatarsImg"
              :class-list="classList"
              :styles="styles"
            />
            <RocketRaceList
              v-if="rocketRaceListVisible"
              :subheader="subheader"
              :players="players"
              :img="avatarsImg"
              :class-list="classList"
              :styles="styles"
              :correct-answers-to-win="correctAnswersToWin"
              :rocket-race-bar-color="rocketRaceBarColor"
              :rocket-race-percentage="rocketRacePercentage"
            />
            <SpaceBattleChooseYourTeam
              v-if="spaceBattleVisible && !isCreator"
              :team-selected="teamSelected"
              :teams="teams"
              :select-team="selectTeam"
              :game-img-fun="gameImgFun"
            />
            <SpaceBattleTeamBar
              v-if="spaceBattleProgressVisible && spaceBattle"
              :teams="teams"
              :game-img-fun="gameImgFun"
              :styles="styles"
              :space-battle-percentage="spaceBattlePercentage"
            />
            <SpaceBattleTeamLists
              v-if="spaceBattle"
              :team-red-players="teamRedPlayers"
              :team-blue-players="teamBluePlayers"
              :class-list="classList"
              :avatars-img="avatarsImg"
              :styles="styles"
            />
            <GameAnalytics
              v-if="analyticsVisible"
              :game-analytics="gameAnalytics"
              :styles="styles"
              :seconds-text="secondsText"
            />
          </v-card>
        </v-flex>
      </v-layout>
      <GameStartsInDialog
        :dialog="dialog"
        :styles="styles"
        :counter-init="counterInit"
      />
    </div>
    <ClickButtonToRegister v-else :styles="styles" />
  </v-container>
</template>

<script>
import LobbyAction from "../mixins/lobbyAction";
export default {
  name: "Lobby",
  mixins: [LobbyAction],
  sockets: {
    welcomePlayers(data) {
      if (this.spaceBattle) {
        const teamRed = data.filter(e => e.team === "teamRed");
        const teamBlue = data.filter(e => e.team === "teamBlue");
        this.$store.commit("teamRedUpdate", teamRed);
        this.$store.commit("teamBlueUpdate", teamBlue);
        return;
      }

      this.$store.commit("playersUpdate", data);
    },
    startNow() {
      this.spinner = false;
      this.dialog = true;
      this.countDown();
    },
    allGetOut() {
      return this.$router.push({ path: `/play` });
    },
    gameLoader(gameSettings) {
      this.$store.dispatch("gameLoader", gameSettings);
    },
    gameStartedTruePong(startTimeAndQuestions) {
      this.$router.push({ path: `/action/${this.EKCode}` });

      // Game started!
      this.$store.dispatch("gameStartedTrue", startTimeAndQuestions);
    },
    gameStartedHurry(gameSettings) {
      this.$store.dispatch("gameLoader", gameSettings);
      this.$store.dispatch("gameStartedTrue", {
        startTime: gameSettings.startTime,
        questions: gameSettings.questions
      });
    },
    gameFinished() {
      this.$store.dispatch("gameFinishedMaster");
    }
  },
  data() {
    return {
      dialog: false,
      ok: true,
      spinner: false,
      counterInit: 5,
      timerCountdown: null,
      subheader: "Welcome!",
      size: 60,
      width: 2,
      showGameAnalytics: false
    };
  },
  methods: {
    startGame() {
      this.spinner = true;
      this.$socket.emit(
        "startGame",
        this.gamesCreated.find(x => x.room === this.EKCode)
      );
    },
    countDown() {
      this.timerCountdown = setInterval(() => {
        this.counterInit--;
      }, 1000);
    },
    join() {
      if (this.gameNickname) {
        const data = {
          room: this.EKCode,
          username: this.gameNickname
        };
        this.$socket.emit("join", data);
      }
    },
    startGameText(timesPlayed) {
      return timesPlayed > 0 ? "Play again" : "Start game";
    },
    gameAnalyticsToggle() {
      this.showGameAnalytics = !this.showGameAnalytics;
    },
    gameReviewText(showGameAnalytics) {
      return showGameAnalytics ? "Game results" : "Game review";
    },
    selectTeam(team) {
      this.$store.commit("teamSelectedSet", team);

      // Emit joinTeam y broadcast a todos los jugadores
      return team === "teamRed"
        ? this.$socket.emit("teamRed", this.EKCode)
        : this.$socket.emit("teamBlue", this.EKCode);
    }
  },
  computed: {
    disabled() {
      if (this.spaceBattle) {
        return (
          !this.teamRedPlayers.length ||
          !this.teamBluePlayers.length ||
          this.spinner
        );
      }

      return !this.players.length || this.spinner;
    },
    gameAlreadyStartedDisabled() {
      if (this.spaceBattle) {
        return !this.teamSelected;
      }

      return false;
    },
    winnersVisible() {
      return this.$store.state.winnersVisible;
    },
    analyticsVisible() {
      return this.gameAnalytics && this.showGameAnalytics;
    },
    classroomRushListVisible() {
      return this.classroomRushRules && !this.showGameAnalytics;
    },
    rocketRaceListVisible() {
      return this.rocketRaceRules && !this.showGameAnalytics;
    },
    spaceBattleVisible() {
      return this.spaceBattleRules && !this.showGameAnalytics;
    }
  },
  watch: {
    counterInit(v) {
      if (v === 0) {
        this.dialog = false;
        clearInterval(this.timerCountdown);
        this.counterInit = 5;
        // Seteamos el ejercicio started a true y recibimos pong para redireccionar
        if (this.isCreator) {
          this.$socket.emit("gameStartedTruePing", this.EKCode);
        }
      }
    },
    dialog(v) {
      if (!v) {
        this.counterInit = 5;
        clearInterval(this.timerCountdown);
      }
    },
    seconds(v) {
      if (v === 0) {
        if (this.isCreator) {
          // Con esto seteamos el started to false y
          // Si estamos en el lobby mandamos a los jugadores al lobby cuando acaban
          this.$socket.emit("gameFinishedPing", this.EKCode);
        }
      }
    }
  },
  created() {
    this.$store.commit("EKCodeAssigner", this.$route.params.code);
  },
  mounted() {
    this.join();

    if (this.isCreator) {
      window.onbeforeunload = function() {
        return "Are you sure you want to close the window?";
      };
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.isCreator) {
      window.onbeforeunload = null;

      // Si no van a action
      if (to.name !== "action") {
        this.$store.dispatch("clearTimer");
        this.$socket.emit("unsubscribeAndAllGetOut", this.EKCode);
        this.resetGame();
      }

      next();
      return;
    }

    // Si no van a action
    if (to.name !== "action") {
      this.$store.dispatch("clearTimer");
      this.$socket.emit("unsubscribe", this.EKCode);
      this.resetGame();
    }

    next();
  },
  destroyed() {
    clearInterval(this.timerCountdown);
  }
};
</script>
