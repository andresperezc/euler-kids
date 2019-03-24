<template>
  <v-container>
    <div class="headline font-weight-light text-xs-center">
      Join the game with this EK Code
    </div>
    <div :class="styles.textColor" class="display-1  text-xs-center">
      {{ EKCode }}
    </div>
  </v-container>
</template>

<script>
export default {
  name: "JoinTheGame",
  props: ["EKCode", "styles"]
};
</script>
