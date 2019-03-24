<template>
  <v-flex xs12 md8 offset-md2 xl6 offset-xl3>
    <v-card>
      <v-container fluid>
        <v-layout row justify-space-between>
          <v-flex v-if="rocketRace" xs12>
            <v-progress-linear
              :color="
                rocketRaceBarColor(
                  rocketRacePercentage(correctAnswersToWin, answered)
                )
              "
              height="10"
              :value="rocketRacePercentage(correctAnswersToWin, answered)"
            ></v-progress-linear>
          </v-flex>
          <v-flex v-if="classroomRush" xs12>
            <div class="title grey--text text--darken-1 text-xs-center">
              Score
            </div>
            <div class="subheading blue--text text--darken-1 text-xs-center">
              {{ points }}
            </div>
          </v-flex>
          <v-flex v-if="spaceBattle" xs12>
            <v-progress-linear
              :background-color="styles.color"
              color="pink"
              height="10"
              :value="spaceBattlePercentage"
            ></v-progress-linear>
          </v-flex>
          <v-flex xs12>
            <div class="title grey--text text--darken-1 text-xs-center">
              Time
            </div>
            <div
              :class="timePerQuestionClass(seconds)"
              class="subheading text-xs-center"
            >
              {{ timeFormat(seconds) }}
            </div>
          </v-flex>
          <v-flex xs12 v-if="rocketRace || classroomRush">
            <div class="title grey--text text--darken-1 text-xs-center">
              Place
            </div>
            <div
              class="subheading text-xs-center"
              :class="firstPlaceClass(place)"
            >
              {{ place }}
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "ScoreTimePlace",
  props: [
    "rocketRace",
    "rocketRaceBarColor",
    "rocketRacePercentage",
    "correctAnswersToWin",
    "answered",
    "classroomRush",
    "spaceBattle",
    "points",
    "timePerQuestionClass",
    "seconds",
    "timeFormat",
    "firstPlaceClass",
    "place",
    "styles",
    "spaceBattlePercentage"
  ]
};
</script>
