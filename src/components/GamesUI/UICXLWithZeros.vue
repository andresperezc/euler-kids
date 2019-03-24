<template>
  <div>
    <v-layout text-xs-center row wrap justify-center>
      <GameBtn
        :before-enter="beforeEnter"
        :enter="enter"
        :leave="leave"
        :missed="missed"
        :points-color="pointsColor"
        :points-number="pointsNumber"
        :classroom-rush="classroomRush"
        :space-battle="spaceBattle"
        :show-points="showPoints"
      />
      <v-flex xs12>
        <div class="display-1 text-xs-center">
          <div v-katex="question.operation"></div>
        </div>
      </v-flex>
      <v-flex xs12>
        <div v-if="show" class="display-1 text-xs-center">
          <div :class="styles.textColor" v-katex="answerHere"></div>
        </div>
        <div v-else class="display-1 text-xs-center">
          <div :class="styles.textColor" v-katex="hidden + input"></div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center row wrap justify-center>
      <v-flex xs12>
        <div class="contiene">
          <div
            v-for="n in keypad"
            :key="n"
            :class="myClass(n)"
            @click="getNumber(n)"
          >
            <div class="container1" :ref="n">
              <div :class="pointClass(n)">{{ n }}</div>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import KeypadOne from "../../mixins/games/keypadOne";
import GameBtn from "../../components/Animations/GameBtn";
export default {
  name: "UICXLWithZeros",
  mixins: [KeypadOne],
  components: {
    GameBtn
  },
  data() {
    return {
      keypad: ["9", "8", "7", "6", "5", "4", "3", "2", "1", "⌫", ".", "0"],
      dummy: [
        {
          operation: "0.08 \\times 10 =",
          correct: "0.8",
          correct2: ".8"
        },
        {
          operation: "5.73 + 0.1 =",
          correct: "5.83"
        },
        {
          operation: "5.736 + 0.1 =",
          correct: "5.836"
        },
        {
          operation: "5.736 + 1 =",
          correct: "6.736"
        },
        {
          operation: "5.736 + 0.01 =",
          correct: "5.746"
        },
        {
          operation: "5.736 + 0.001 =",
          correct: "5.737"
        }
      ]
    };
  },
  methods: {
    pointClass(symbol) {
      return symbol === "." ? "headline" : "subheading";
    },
    myClass() {
      return "block  cursor  activado noselect";
    },
    getNumber(number) {
      if (number === "⌫") {
        this.input = this.input.slice(0, -1);
        return;
      }

      if (this.input === "0" && number === "0") {
        return;
      }

      this.input += number;
    },
    keydown(e) {
      if (e.key === "Backspace") {
        this.input = this.input.slice(0, -1);
        this.$refs["⌫"][0].setAttribute(
          "class",
          "container1 light-green accent-3"
        );

        return;
      }

      if (e.key === "Delete") {
        this.input = this.input.slice(0, -1);
        this.$refs["⌫"][0].setAttribute(
          "class",
          "container1 light-green accent-3"
        );
        return;
      }

      if (this.keypad.includes(e.key)) {
        this.$refs[e.key][0].setAttribute(
          "class",
          "container1 light-green accent-3"
        );

        if (this.input === "0" && e.key === "0") {
          return;
        }

        this.input += e.key;
      }
    }
  },
  watch: {
    input(v) {
      this.show = v === this.answerHere;

      if (!v) {
        this.show = true;
      }

      if (this.question) {
        if (v === this.question.correct || v === this.question.correct2) {
          let audio = new Audio(require("@/assets/Audio/success.mp3"));
          audio.volume = 0.1;
          audio.play();
          this.input = "";
          this.$store.commit("showPointsSet", {
            showPoints: true,
            missed: false
          });

          if (this.Dev) {
            this.$store.dispatch("inkMaster");
          }

          if (this.gameIsActive) {
            this.$store.dispatch("inkMaster");
            const data = {
              room: this.EKCode,
              points: this.points,
              answered: this.answered,
              gameMode: this.gameMode,
              correctAnswersToWin: this.correctAnswersToWin
            };

            this.$store.commit("questionsSolvedSet", {
              id: this.questions[this.counter - 1].id,
              question: this.questions[this.counter - 1], // mandamos la pregunta que contestó. Una anterior
              time: this.timePerQuestionSetting - this.timePerQuestion,
              missed: false
            });

            this.$socket.emit("sendPoints", data);
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.contiene {
  width: 275px;
  /*border: 1px solid black;*/
  display: inline-block;
}

.block {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 5px;
  background: #e0e0e0;
  float: right;
}

.block2 {
  display: inline-block;
  width: 170px;
  height: 80px;
  margin: 5px;
  background: #e0e0e0;
  float: right;
}

.block[v2] {
  height: 210px;
}

.block[h2] {
  width: 210px;
}

.cursor {
  cursor: pointer;
}

.activado:hover {
  background: #bdbdbd;
}
.activado:active {
  background-color: #76ff03;
  background-size: 100%;
}

div.container1 {
  height: 5.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}
div.container1 div {
  margin: 0;
}
</style>
