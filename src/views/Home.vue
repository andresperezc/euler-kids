<template>
  <div>
    <section>
      <v-parallax :src="parallax" height="500">
        <v-layout
          column
          align-center
          justify-center
          class="grey--text text--darken-2"
        >
          <img
            :src="require('../assets/ekLogo.svg')"
            alt="Euler Kids"
            height="150"
          />
          <img
            :src="slogan"
            class="mt-3 responsiveSub"
            alt="Real time educational game for classrooms"
            height="50"
          />
        </v-layout>
      </v-parallax>
    </section>
    <v-container grid-list-md>
      <v-sparkline
        :value="value"
        :gradient="gradients[0]"
        :smooth="radius || false"
        height="25"
        :line-width="width"
        :stroke-linecap="lineCap"
        auto-draw
      ></v-sparkline>
      <v-layout row wrap justify-space-around mb-5>
        <v-flex xs12 mb-3>
          <div
            :class="textColor"
            class="text-xs-center display-1 mt-3 font-weight-light"
          >
            {{ title1 }}
          </div>
        </v-flex>
        <v-flex v-for="step in steps" :key="step.title" xs12 sm4 xl2>
          <v-img height="150px" contain :src="img(step.img)"></v-img>
          <div
            :class="textColor"
            class="title text-xs-center mt-2 font-weight-light"
          >
            {{ step.title }}
          </div>
          <div
            class="subheading text-xs-center mt-3 font-weight-light grey--text text--darken-2"
          >
            {{ step.paragraph }}
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-sparkline
        :value="value"
        :gradient="gradients[1]"
        :smooth="radius || false"
        height="25"
        :line-width="width"
        :stroke-linecap="lineCap"
        auto-draw
      ></v-sparkline>
      <v-layout row wrap justify-center>
        <v-flex xs12>
          <div
            :class="textColor"
            class="text-xs-center display-1 mt-3 mb-4 font-weight-light"
          >
            {{ title2 }}
          </div>
        </v-flex>
        <v-flex xs12 sm8 md4>
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3Rr0xQGNlD4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-layout row wrap>
          <v-container grid-list-md>
            <v-layout row wrap align-center justify-center mb-3>
              <v-flex xs12 sm6 md3>
                <v-img
                  contain
                  :src="img(create)"
                  alt="create"
                  height="200"
                ></v-img>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <div :class="textColor" class="headline font-weight-light mb-3">
                  {{ subtitle1 }}
                </div>
                <div
                  class="subheading font-weight-light grey--text text--darken-2 mb-2"
                >
                  {{ paragraph1 }}
                </div>
                <div
                  class="subheading font-weight-light grey--text text--darken-2 mb-2"
                >
                  {{ paragraph2 }}
                </div>
                <img
                  class="mx-3"
                  :src="img(gameMode1)"
                  alt="create"
                  height="100"
                />
                <img
                  class="mx-3"
                  :src="img(gameMode2)"
                  alt="create"
                  height="100"
                />
                <img
                  class="mx-3"
                  :src="img(gameMode3)"
                  alt="create"
                  height="100"
                />
                <div
                  class="subheading font-weight-light grey--text text--darken-2 mb-2"
                >
                  {{ paragraph3 }}
                </div>
                <div
                  class="subheading font-weight-light grey--text text--darken-2 mb-2"
                >
                  {{ paragraph31 }}
                </div>
              </v-flex>
            </v-layout>
            <v-layout row wrap align-center justify-center mb-3>
              <v-flex xs12 sm6 md3>
                <v-img
                  contain
                  :src="img(compete)"
                  alt="compete"
                  height="200"
                ></v-img>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <div :class="textColor" class="headline font-weight-light mb-3">
                  {{ subtitle2 }}
                </div>
                <div
                  class="subheading font-weight-light grey--text text--darken-2 mb-2"
                >
                  {{ paragraph4 }}
                </div>
                <div
                  class="subheading font-weight-light grey--text text--darken-2 mb-2"
                >
                  {{ paragraph5 }}
                </div>

                <div
                  class="subheading font-weight-light grey--text text--darken-2 mb-2"
                >
                  {{ paragraph6 }}
                </div>
              </v-flex>
            </v-layout>
            <v-layout row wrap align-center justify-center mb-3>
              <v-flex xs12 sm6 md3>
                <v-img
                  contain
                  :src="img(haveFun)"
                  alt="have fun"
                  height="200"
                ></v-img>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <div>
                  <div
                    :class="textColor"
                    class="headline font-weight-light mb-3"
                  >
                    {{ subtitle3 }}
                  </div>

                  <div
                    class="subheading font-weight-light grey--text text--darken-2 mb-2"
                  >
                    {{ paragraph7 }}
                  </div>
                  <div
                    class="subheading font-weight-light grey--text text--darken-2 mb-2"
                  >
                    {{ paragraph8 }}
                  </div>
                  <div
                    class="subheading font-weight-light grey--text text--darken-2 mb-2"
                  >
                    {{ paragraph9 }}
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-layout>
    </v-container>

    <v-container>
      <v-sparkline
        :value="value"
        :gradient="gradients[2]"
        :smooth="radius || false"
        height="25"
        :line-width="width"
        :stroke-linecap="lineCap"
        auto-draw
      ></v-sparkline>
      <v-layout row wrap justify-center mb-4>
        <v-flex xs12>
          <div
            :class="textColor"
            class="text-xs-center display-1 mt-3 mb-4 font-weight-light"
          >
            {{ title3 }}
          </div>
        </v-flex>
        <v-flex xs12 sm8 md4>
          <div class="subheading font-weight-light grey--text text--darken-2">
            <ul>
              <li v-for="benefit in benefits" :key="benefit">{{ benefit }}</li>
            </ul>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex sm12 md3>
          <v-img :src="img(logoStars)" alt="logo" height="250" contain></v-img>
        </v-flex>
        <v-flex xs12 md4>
          <div
            class="text-xs-center headline mb-3 font-weight-light"
            :class="textColor"
          >
            {{ title4 }}
          </div>
          <div
            class="text-xs-center subheading grey--text text--darken-2 font-weight-light mb-2"
          >
            <v-icon class="mr-3" :class="textColor">phone</v-icon>
            +52 (442) 323-6905
          </div>
          <div
            class="text-xs-center subheading grey--text text--darken-2 font-weight-light mb-2"
          >
            <v-icon class="mr-3 green--text text--accent-4" :class="textColor"
              >email</v-icon
            >
            hello@eulerkids.com
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 1,
      radius: 10,
      padding: 1,
      lineCap: "round",
      gradients: [
        ["#00c6ff", "#F0F", "#FF0"],
        ["#F0F", "#00c6ff", "#FF0"],
        ["#FF0", "#F0F", "#00c6ff"]
      ],
      value: [0, 20, 0, 20, 0, 20, 0, 20, 0],
      green: "greenBlue",
      title1: "In Euler Kids you will find",
      steps: [
        {
          img: "stopwatch",
          title: "Real-time games",
          paragraph:
            "Real-time multi-player educational games from 1st to 6th grade"
        },
        {
          img: "gameMode",
          title: "Different game modes",
          paragraph:
            "Do you want to run against the clock, run a race, or do you prefer to compete between teams?"
        },
        {
          img: "connection",
          title: "Classroom connection",
          paragraph:
            "All your students practicing and competing at the same time!"
        }
      ],
      pink: "pinkAmber",
      title2: "How it works",
      create: "ekCode",
      subtitle1: "Create a game",
      paragraph1:
        "Click on the create button. Choose a mental math game according to the " +
        "grade and topic you want to practice.",
      paragraph2:
        "Select a game mode. Classroom Rush where you need to answer questions as fast as you can, " +
        "Rocket Race were the first person to reach the goal wins, or Space Battle where you can compete " +
        "between teams!",
      gameMode1: "classroomRush",
      gameMode2: "rocketRace",
      gameMode3: "spaceBattle",
      paragraph3: "Determine the duration of the game and click on create! ",
      paragraph31:
        "Share the generated EK-Code with your students and start the game!",
      compete: "compete",
      subtitle2: "Join the game",
      paragraph4:
        "On their own devices your students must click on the play! button.",
      paragraph5:
        "They must write the EK-Code you shared with them, and write their names.",
      paragraph6: "When everybody is ready, click on Start Game!",
      haveFun: "haveFun",
      subtitle3: "Play, practice and have fun!",
      paragraph7:
        "Challenge your students to answer as fast as they can. Strive for fairness and make fun a priority!",
      paragraph8:
        "At the end of the game, everybody can check the results using the game statistics.",
      paragraph9:
        "Motivate your students to keep on working, enjoy and play again!",
      blue: "bluePurple",
      title3: "Five ways competition enhance learning",
      benefits: [
        "Encourages higher standards of achievement",
        "Builds camaraderie and teamwork while enhances beneficial peers comparisons",
        "Strengths academic self-concept, empathy & tenacity",
        "Improves critical social skills by teaching how to win and lose well and how to deal with disappointment",
        "Helps kids understand that their most important competitor is their self"
      ],
      title4: "Jumpstart your skills with EK real-time games!",
      logoStars: "ekLogoStars"
    };
  },
  methods: {
    img(img) {
      return require(`@/assets/Landing/${img}.svg`);
    },
    checkRooms() {
      this.$socket.emit("checkRooms");
    }
  },
  computed: {
    parallax() {
      return require(`@/assets/Landing/stars.svg`);
    },
    slogan() {
      return require(`@/assets/Landing/slogan.svg`);
    },
    textColor() {
      return this.$store.state.styles.textColor;
    }
  }
};
</script>

<style scoped>
.responsiveSub {
  width: 100%;
  height: 40px;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
