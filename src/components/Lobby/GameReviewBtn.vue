<template>
  <v-btn :color="styles.color" dark outline @click="gameAnalyticsToggle">
    {{ gameReviewText(showGameAnalytics) }}
  </v-btn>
</template>

<script>
export default {
  name: "GameReviewBtn",
  props: [
    "styles",
    "gameAnalyticsToggle",
    "gameReviewText",
    "showGameAnalytics"
  ]
};
</script>
