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
          <div v-katex="hiddenX + replaceX(question.operation, input)"></div>
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
              <div class="subheading">{{ n }}</div>
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
  name: "UIBWithX",
  mixins: [KeypadOne],
  components: {
    GameBtn
  },
  data() {
    return {
      dummy: [
        {
          operation: "\\textcolor{#1E88E5}{x} + 9 = 10",
          correct: "1"
        },
        {
          operation: "9 \\times \\textcolor{#1E88E5}{x} = 76",
          correct: "1"
        },
        {
          operation: "9 \\times 8 = \\textcolor{#1E88E5}{x}",
          correct: "1"
        }
      ]
    };
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
