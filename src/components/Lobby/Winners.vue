<template>
  <v-card>
    <v-layout row justify-center>
      <v-flex xs4 v-for="winner in winners" :key="winner.username">
        <v-img
          class=""
          :src="img(winner.img)"
          alt="membership_images"
          contain
          height="80"
        ></v-img>
        <div v-if="spaceBattleRules">
          <div
            :class="winner.usernameColor"
            class="headline text-xs-center font-weight-light mb-2"
          >
            {{ winner.username.replace(/(.{9})..+/, "$1…") }}
          </div>
        </div>
        <div v-else>
          <div
            :class="styles.textColor"
            class="headline text-xs-center font-weight-light mb-2"
          >
            {{ winner.username.replace(/(.{9})..+/, "$1…") }}
          </div>
        </div>
        <div class="text-xs-center">
          <div v-if="classroomRushRules" class="subheading font-weight-light ">
            Score: {{ winner.points }}
          </div>
          <div>
            <div v-if="rocketRaceRules" class="subheading font-weight-light ">
              Answered: {{ winner.answered }}
            </div>
          </div>
          <div>
            <div v-if="spaceBattleRules" class="subheading font-weight-light ">
              <div v-if="!winner.draw">
                <div>Score: {{ winner.points }}</div>
                <div>Answered: {{ winner.answered }}</div>
              </div>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "Winners",
  props: [
    "winners",
    "img",
    "styles",
    "classroomRushRules",
    "rocketRaceRules",
    "spaceBattleRules"
  ]
};
</script>
