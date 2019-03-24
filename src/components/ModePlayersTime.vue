<template>
  <div>
    <v-flex xs12>
      <v-container fluid>
        <v-layout row justify-space-between>
          <v-flex xs12>
            <div class="title grey--text text--darken-1 text-xs-center">
              Game mode
            </div>
            <div :class="styles.textColor" class="subheading text-xs-center">
              {{ roomGameMode }}
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="title grey--text text--darken-1 text-xs-center">
              Total players
            </div>
            <div :class="styles.textColor" class="subheading text-xs-center">
              {{ players.length || spaceBattleTotalPlayers  }}
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="title grey--text text--darken-1 text-xs-center">
              Time
            </div>
            <div
              :class="timePerQuestionClass(seconds)"
              class="subheading text-xs-center"
            >
              {{ timeFormat(seconds) }}
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-divider v-if="players.length"></v-divider>
  </div>
</template>

<script>
export default {
  name: "ModePlayersTime",
  props: [
    "roomGameMode",
    "players",
    "timeFormat",
    "seconds",
    "timePerQuestionClass",
    "styles",
    "spaceBattleTotalPlayers"
  ]
};
</script>
