<template>
  <v-card-actions>
    <v-btn
      v-if="!gameStarted"
      :dark="!disabled"
      :disabled="disabled"
      :color="styles.color"
      @click="startGame"
    >
      {{ startGameText(timesPlayed) }}
    </v-btn>
    <v-progress-linear
      v-if="spinner"
      :color="styles.color"
      class="mx-2"
      height="5"
      :indeterminate="true"
    ></v-progress-linear>
  </v-card-actions>
</template>

<script>
export default {
  name: "StartGameButton",
  props: [
    "gameStarted",
    "disabled",
    "styles",
    "startGame",
    "startGameText",
    "timesPlayed",
    "spinner"
  ]
};
</script>
