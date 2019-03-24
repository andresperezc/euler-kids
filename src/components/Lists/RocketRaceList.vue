<template>
  <v-list v-if="players.length" subheader three-line>
    <v-subheader>{{ subheader }}</v-subheader>
    <v-list-tile
      avatar
      v-for="(player, index) in players"
      :key="index"
      :class="classList(index)"
    >
      <v-list-tile-avatar>
        <img :src="img(player.avatar)" />
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title class="font-weight-light">
          <v-progress-linear
            :color="
              rocketRaceBarColor(
                rocketRacePercentage(correctAnswersToWin, player.answered)
              )
            "
            height="10"
            :value="rocketRacePercentage(correctAnswersToWin, player.answered)"
          ></v-progress-linear>
        </v-list-tile-title>
        <v-list-tile-sub-title>
          {{ player.username }}
          <v-spacer></v-spacer>
          Answered:
          <span :class="styles.textColor">{{ player.answered }}</span>
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: "RocketRaceList",
  props: [
    "subheader",
    "players",
    "img",
    "classList",
    "styles",
    "correctAnswersToWin",
    "rocketRaceBarColor",
    "rocketRacePercentage"
  ]
};
</script>
