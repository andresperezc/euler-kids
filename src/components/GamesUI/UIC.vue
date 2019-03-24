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
        <div class="display-1 text-xs-center mb-3">
          <div v-katex="hidden + replace(question.operation, input)"></div>
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
  name: "UIC",
  mixins: [KeypadOne],
  components: {
    GameBtn
  },
  data() {
    return {
      keypad: ["9", "8", "7", "6", "5", "4", "3", "2", "1", "⌫", ".", "0"],
      dummy: [
        {
          operation: "5.7 + 0.1 =",
          correct: "5.8"
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
