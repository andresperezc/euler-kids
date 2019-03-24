<template>
  <div>
    <div class="mx-2" :class="styles.textRed">
      Game already started
    </div>
    <div>
      <v-btn
        :color="styles.color"
        :dark="!gameAlreadyStartedDisabled"
        :disabled="gameAlreadyStartedDisabled"
        :to="`/action/${EKCode}`"
      >
        join the game
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameAlreadyStarted",
  props: ["styles", "EKCode", "gameAlreadyStartedDisabled"]
};
</script>
