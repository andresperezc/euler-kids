<template>
  <v-flex xs6 offset-xs3 lg4 offset-lg4>
    <v-img
      :class="gameImg.gradient"
      :src="img(gameImg.dir, gameImg.img)"
      height="70"
      contain
    >
      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-layout>
    </v-img>
  </v-flex>
</template>

<script>
export default {
  name: "LobbyActionGameImg",
  props: ["img", "gameImg"]
};
</script>
