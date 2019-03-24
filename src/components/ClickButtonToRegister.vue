<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm6 md4 xl3>
      <v-card class="rounded-card">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-img
                :src="require('@/assets/ekLogo.svg')"
                contain
                height="120"
              ></v-img>
            </v-flex>
            <v-flex xs12>
              <div class="subheading font-weight-light">
                Click the button to register in a game
              </div>
              <v-btn dark :color="styles.color" to="/play"> Ok </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ClickButtonToRegister",
  props: ["styles"]
};
</script>
<style scoped>
.rounded-card {
  border-radius: 25px;
}
</style>
