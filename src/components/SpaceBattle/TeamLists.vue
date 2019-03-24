<template>
  <v-layout row wrap>
    <v-flex sm6>
      <v-list subheader>
        <v-list-tile
          avatar
          v-for="(player, index) in teamRedPlayers"
          :key="index"
          :class="classList(index)"
        >
          <v-list-tile-avatar>
            <img :src="avatarsImg(player.avatar)" />
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
    </v-flex>
    <v-flex sm6>
      <v-list subheader>
        <v-list-tile
          avatar
          v-for="(player, index) in teamBluePlayers"
          :key="index"
          :class="classList(index)"
        >
          <v-list-tile-avatar>
            <img :src="avatarsImg(player.avatar)" />
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
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "TeamLists",
  props: [
    "teamRedPlayers",
    "teamBluePlayers",
    "classList",
    "avatarsImg",
    "styles"
  ]
};
</script>
