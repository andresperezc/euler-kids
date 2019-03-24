import { mapState } from "vuex";
import { mapGetters } from "vuex";
import Velocity from "velocity-animate";
export default {
  data() {
    return {
      show: true,
      answerHere: "\\textcolor{#1E88E5}{\\_}",
      hidden: "\\textcolor{#FFFFFF}{\\text{\\textunderscore}}",
      hiddenX: "\\textcolor{#FFFFFF}{x}",
      input: "",
      keypad: ["9", "8", "7", "6", "5", "4", "3", "2", "1", "⌫", "0"]
    };
  },
  methods: {
    myClass(symbol) {
      return symbol === "0"
        ? "block2  cursor  activado noselect"
        : "block  cursor  activado noselect";
    },
    replace(operation, input) {
      return !input ? operation : operation.replace(/\\_/g, input);
    },
    replaceX(operation, input) {
      return !input ? operation : operation.replace("{x}", `{${input}}`);
    },
    getNumber(number) {
      if (number === "⌫") {
        this.input = this.input.slice(0, -1);
        return;
      }

      if (this.input === "0" && number === "0") {
        return;
      }

      if (this.input === "0" && number !== "0") {
        return (this.input = number);
      }

      this.input += number;
    },
    keydown(e) {
      if (e.key === "Backspace") {
        //e.preventDefault()
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
      //console.log("ref = ", this.$refs["1"][0].getAttribute("class"));

      if (this.keypad.includes(e.key)) {
        // Usamos [0] porque el ref es parte de un v-for así que es un array
        this.$refs[e.key][0].setAttribute(
          "class",
          "container1 light-green accent-3"
        );

        if (this.input === "0" && e.key === "0") {
          return;
        }

        if (this.input === "0" && e.key !== "0") {
          return (this.input = e.key);
        }

        this.input += e.key;
      }
    },
    keyup(e) {
      if (this.keypad.includes(e.key)) {
        return this.$refs[e.key][0].setAttribute("class", "container1");
      }
      this.$refs["⌫"][0].setAttribute("class", "container1");
    },
    //Animations
    beforeEnter: function(el) {
      Velocity(el, { translateY: "20px" }, { duration: 10 });
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      let self = this;
      Velocity(el, { opacity: 1, translateY: "-10px" }, { duration: 100 });
      Velocity(el, {
        complete: function(elements) {
          self.$store.commit("showPointsSet", {
            showPoints: false,
            missed: false
          });

          done();
        }
      });
    },
    leave: function(el, done) {
      Velocity(el, { opacity: 0 }, { duration: 10 });
      Velocity(el, { complete: done });
    },
    pointsColor(missed) {
      return missed ? "pink" : "green accent-4";
    },
    pointsNumber(classroomRush, spaceBattle, missed) {
      if (classroomRush) {
        return missed ? "-1" : "+2";
      }

      if (spaceBattle) {
        return missed ? "-1" : "+2";
      }

      return missed ? "✕" : "✓";
    }
  },
  computed: {
    ...mapState([
      "EKCode",
      "points",
      "counter",
      "answered",
      "correctAnswersToWin",
      "timePerQuestion",
      "questionsSolved",
      "styles",
      "Dev",
      "missed",
      "showPoints"
    ]),
    ...mapGetters([
      "gameIsActive",
      "gameMode",
      "questions",
      "timePerQuestionSetting",
      "isCreator",
      "classroomRush",
      "spaceBattle"
    ]),
    question() {
      return this.Dev ? this.dummy[this.counter] : this.questions[this.counter];
    }
  },
  watch: {
    input(v) {
      this.show = v === this.answerHere;

      if (!v) {
        this.show = true;
      }

      if (this.question) {
        if (v === this.question.correct) {
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
    },
    counter(v) {
      // Reset del input cuando cambia pregunta
      this.input = "";

      if (this.Dev) {
        if (v === this.dummy.length) {
          this.$store.commit("resetCounter", 0);
        }
        return;
      }

      if (v === this.questions.length) {
        // Aquí mandamos las questionSolved
        // Ya que hemos terminado el pool de ejercicios
        if (!this.isCreator) {
          this.$socket.emit("gameAnalyticsPing", {
            room: this.EKCode,
            questionsSolved: this.questionsSolved
          });
        }

        // Reseteamos questionsSolved
        this.$store.commit("questionsSolvedReset");
        this.$store.commit("shuffleQuestions");
        this.$store.commit("resetCounter", 0);
      }
    }
  },
  mounted() {
    window.addEventListener("keydown", this.keydown, true);
    window.addEventListener("keyup", this.keyup, true);
  },
  destroyed() {
    window.removeEventListener("keydown", this.keydown, true);
    window.removeEventListener("keyup", this.keyup, true);
  }
};
