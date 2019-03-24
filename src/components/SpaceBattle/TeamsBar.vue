<template>
  <v-container>
    <v-layout row wrap justify-space-between>
      <v-flex xs3 v-for="(team, i) in teams" :key="i">
        <v-img :src="gameImgFun(team.dir, team.img)" contain height="50">
          <v-layout
            slot="placeholder"
            fill-height
            align-center
            justify-center
            ma-0
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-layout>
        </v-img>
        <div class="font-weight-light text-xs-center">{{ team.name }}</div>
        <div class="font-weight-light text-xs-center">Total points</div>
        <div class="font-weight-light text-xs-center" :class="styles.textColor">
          {{ team.points }}
        </div>
      </v-flex>
      <v-flex xs12>
        <v-progress-linear
          :background-color="styles.color"
          color="pink"
          height="20"
          :value="spaceBattlePercentage"
        ></v-progress-linear>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "TeamsBar",
  props: ["teams", "gameImgFun", "styles", "spaceBattlePercentage"]
};
</script>
