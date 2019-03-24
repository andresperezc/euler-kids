<template>
  <v-card
    tile
    exact
    :id="data"
    @mouseover.native="ascender(data)"
    @mouseleave.native="descender(data)"
    hover
    ripple
    :class="gradient"
    class="white--text "
  >
    <v-container fluid grid-list-lg>
      <v-layout>
        <v-flex>
          <v-img :src="img" height="150px" contain>
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
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { TweenMax } from "gsap";
export default {
  name: "CardImgNoRoute",
  props: ["img", "gradient", "data"],
  methods: {
    ascender(id) {
      let card = document.getElementById(id);
      TweenMax.to(card, 0.2, {
        y: -1,
        ease: Sine.easeInOut
      });
    },
    descender(id) {
      let card = document.getElementById(id);
      TweenMax.to(card, 0.2, {
        y: 0,
        ease: Sine.easeInOut
      });
    }
  }
};
</script>
