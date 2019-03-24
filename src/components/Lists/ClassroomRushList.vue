<template>
  <v-list subheader v-if="players.length">
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
          {{ player.username }}
        </v-list-tile-title>
        <v-list-tile-sub-title v-if="player.answered">
          Answered:
          <span :class="styles.textColor">{{ player.answered }}</span>
        </v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action :class="styles.textColor">
        {{ player.points }}
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: "ClassroomRushList",
  props: ["subheader", "players", "img", "classList", "styles"]
};
</script>
