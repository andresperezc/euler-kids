<template>
  <v-flex xs12>
    <div v-if="classroomRushRules" class="text-xs-center">
      The player with
      <span :class="styles.textColor">more points</span> wins!
    </div>
    <div v-if="rocketRaceRules" class="text-xs-center">
      The first player with
      <span :class="styles.textColor">{{ correctAnswersToWin }} correct</span>
      answers wins!
    </div>
    <div v-if="spaceBattleRules" class="text-xs-center">
      The team with
      <span :class="styles.textColor">more points</span> wins!
    </div>
    <div v-if="timePerQuestionReadOnly" class="text-xs-center">
      Time per question:
      <span :class="styles.textColor">
        {{ timePerQuestionReadOnly }}
      </span>
      seconds
    </div>
  </v-flex>
</template>

<script>
export default {
  name: "RoomRules",
  props: [
    "classroomRushRules",
    "rocketRaceRules",
    "spaceBattleRules",
    "styles",
    "correctAnswersToWin",
    "timePerQuestionReadOnly"
  ]
};
</script>
