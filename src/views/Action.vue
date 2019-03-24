<template>
  <v-container grid-list-md>
    <div v-if="haveCredentials">
      <v-layout row wrap v-if="isCreator">
        <v-flex xs12 sm8 offset-sm2 lg6 offset-lg3 xl4 offset-xl4>
          <v-card class="mt-1">
            <JoinTheGame :e-k-code="EKCode" :styles="styles" />
          </v-card>
        </v-flex>
        <v-flex xs12 sm8 offset-sm2 md4 offset-md4>
          <v-card>
            <LobbyActionGameImg
              v-if="gameImg"
              :img="gameImgFun"
              :gameImg="gameImg"
            />
            <ModePlayersTime
              :room-game-mode="roomGameMode"
              :players="players"
              :time-format="timeFormat"
              :seconds="seconds"
              :time-per-question-class="timePerQuestionClass"
              :styles="styles"
            />
            <ClassroomRushList
              v-if="classroomRush"
              :subheader="subheader"
              :players="players"
              :img="avatarsImg"
              :class-list="classList"
              :styles="styles"
            />
            <RocketRaceList
              v-if="rocketRace"
              :subheader="subheader"
              :players="players"
              :img="avatarsImg"
              :class-list="classList"
              :styles="styles"
              :correct-answers-to-win="correctAnswersToWin"
              :rocket-race-bar-color="rocketRaceBarColor"
              :rocket-race-percentage="rocketRacePercentage"
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
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="!isCreator">
        <ScoreTimePlace
          :rocket-race="rocketRace"
          :rocket-race-bar-color="rocketRaceBarColor"
          :rocket-race-percentage="rocketRacePercentage"
          :space-battle="spaceBattle"
          :correct-answers-to-win="correctAnswersToWin"
          :answered="answered"
          :classroom-rush="classroomRush"
          :points="points"
          :time-per-question-class="timePerQuestionClass"
          :seconds="seconds"
          :time-format="timeFormat"
          :first-place-class="firstPlaceClass"
          :place="place"
          :styles="styles"
          :space-battle-percentage="spaceBattlePercentage"
        />
        <v-flex xs12 md8 offset-md2 xl6 offset-xl3>
          <v-card>
            <v-container>
              <div class="math">
                <div
                  v-if="timePerQuestion"
                  :class="timePerQuestionClass(timePerQuestion)"
                  class="text-xs-center subheading"
                >
                  {{ secondsFormat(timePerQuestion) }}
                </div>
                <component :is="currentView"> </component>
              </div>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <ClickButtonToRegister v-else :styles="styles" />
  </v-container>
</template>

<script>
import LobbyAction from "../mixins/lobbyAction";
import { games } from "./GamesLists/gameHandler";
import get from "lodash.get";
export default {
  name: "Action",
  mixins: [LobbyAction],
  components: games,
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
    gameStartedTruePong(startTimeAndQuestions) {
      this.$store.dispatch("gameStartedTrue", startTimeAndQuestions);
    },
    gameFinished() {
      this.$router.push({ path: `/lobby/${this.EKCode}` });
      this.$store.dispatch("gameFinishedMaster");
    },
    allGetOut() {
      return this.$router.push({ path: `/play` });
    }
  },
  data() {
    return {
      nope: false,
      ok: true,
      subheader: "Ready!"
    };
  },
  methods: {
    firstPlaceClass(place) {
      return place === 1 ? this.styles.textGreen : this.styles.textColor;
    }
  },
  computed: {
    currentView() {
      return get(games, this.gameToPlay, false);
    }
  },
  watch: {
    seconds(v) {
      if (v === 0) {
        if (this.isCreator) {
          this.$socket.emit("gameFinishedPing", this.EKCode);
        }
      }
    },
    counter() {
      // Reseteamos el tiempo de la pregunta cada vez que la tenemos correcta
      this.$store.dispatch("clearTimer");
      this.$store.commit("timePerQuestionSet", this.timePerQuestionSetting);
      this.$store.dispatch("timePerQuestionMaster");
    }
  },
  mounted() {
    document.onkeydown = function(event) {
      if (!event) {
        /* This will happen in IE */
        event = window.event;
      }

      let keyCode = event.key;

      if (
        keyCode === "Backspace" &&
        (event.target || event.srcElement).tagName !== "TEXTAREA" &&
        (event.target || event.srcElement).tagName !== "INPUT"
      ) {
        return false;
      }
    };

    // Necesario que todos reciban los players.
    // Con esto actualizamos los places para todos.
    this.$socket.emit("getPlayersAction", this.EKCode);
  },
  beforeRouteLeave(to, from, next) {
    if (this.isCreator) {
      window.onbeforeunload = null;

      // Si no va al lobby
      if (to.name !== "lobby") {
        this.$store.dispatch("clearTimer");
        this.$socket.emit("unsubscribeAndAllGetOut", this.EKCode);
        this.resetGame();
      }

      next();
      return;
    }

    // Si no van al lobby
    if (to.name !== "lobby") {
      this.$store.dispatch("clearTimer");
      this.$socket.emit("unsubscribe", this.EKCode);
      this.resetGame();
    }

    next();
  }
};
</script>

<style scoped>
.math {
  padding: 10px;
  border: 1px solid #1e88e5;
}
</style>
