<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card width="80" height="80" dark color="secondary" ripple hover>
          <v-card-text class="px-0">{{ i }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Beta"
};
</script>

<style scoped></style>
