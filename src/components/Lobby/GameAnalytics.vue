<template>
  <v-flex xs12>
    <v-container fluid>
      <v-layout row justify-space-between>
        <v-flex xs12>
          <div class="subheading text-xs-center">
            Total questions solved
          </div>
          <div :class="styles.textColor" class="subheading text-xs-center">
            {{ gameAnalytics.totalSolved }}
          </div>
        </v-flex>
        <v-flex xs12>
          <div class="subheading text-xs-center">
            <div>
              Average time per question
            </div>
          </div>
          <div :class="styles.textColor" class="subheading text-xs-center">
            {{ gameAnalytics.averageTimePerQuestion }}
            {{ secondsText(gameAnalytics.averageTimePerQuestion) }}
          </div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <div v-if="gameAnalytics.missedQuestions.length">
            <div class="subheading mb-2">
              Missed questions
            </div>
            <div
              class="subheading "
              v-for="operation in gameAnalytics.missedQuestions"
              :key="operation.operation"
            >
              <div v-katex="operation.operation"></div>
              <div>
                Answer:
                <span
                  :class="styles.textColor"
                  v-katex="operation.correctAnswer"
                ></span>
              </div>
              <div>
                Missed by:
                <span v-for="user in operation.missedBy" :key="user">
                  <v-chip outline :color="styles.red">{{ user }}</v-chip>
                </span>
              </div>
              <v-divider class="mb-2"></v-divider>
            </div>
          </div>
          <div v-else>
            <div class="subheading">
              <span :class="styles.textColor">(☆^ー^☆)</span> Perfect game! No
              missed questions
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  name: "GameAnalytics",
  props: ["gameAnalytics", "styles", "secondsText"]
};
</script>
