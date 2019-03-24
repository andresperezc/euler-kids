<template>
  <v-layout v-if="!teamSelected" text-xs-center row wrap justify-center>
    <v-flex xs12>
      <div class="headline font-weight-light ">
        Choose your team
      </div>
    </v-flex>
    <v-flex xs12 sm6 md4 v-for="(team, i) in teams" :key="i">
      <TeamCard
        @click.native="selectTeam(team.img)"
        :img="gameImgFun(team.dir, team.img)"
        :gradient="team.color"
        :data="team.name"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import TeamCard from "../Cards/CardImgTextNoRoute";
export default {
  name: "ChooseYourTeam",
  components: {
    TeamCard
  },
  props: ["teamSelected", "teams", "selectTeam", "gameImgFun"]
};
</script>

<style scoped></style>
