<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-items>
        <v-btn active-class :to="toolbar.home" flat>
          <v-avatar height="200px">
            <img :src="require(`@/assets/${toolbar.img}`)" alt="logo" />
          </v-avatar>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn flat :color="styles.green" to="/play">
        <span>Play!</span>
      </v-btn>
      <v-btn flat :color="styles.color" to="/create">
        <span>Create</span>
      </v-btn>
    </v-toolbar>

    <v-content> <router-view /> </v-content>
    <Login :dialog="dialog" @closeRegisterWindow="dialogOff" />
    <v-footer app :absolute="absolute" height="auto">
      <v-layout row wrap class="grey lighten-3">
        <v-flex xs12 sm6 offset-sm3>
          <v-layout row wrap>
            <v-flex xs12 class="text-xs-center">
              <v-btn
                small
                v-for="icon in icons"
                :key="icon.icon"
                icon
                target="_blank"
                :href="icon.to"
                class="grey--text lighten-2"
              >
                <v-icon size="24px">{{ icon.icon }}</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs12 py-1 class="text-xs-center">
              <router-link class="caption grey--text lighten-2 mr-2" to="/help">
                Help
              </router-link>
              <router-link
                class="caption grey--text lighten-2 mr-2"
                to="/privacy-policy"
              >
                Privacy
              </router-link>
              <router-link
                class="caption grey--text lighten-2 mr-1"
                to="/terms-of-service"
              >
                Terms
              </router-link>
            </v-flex>
            <v-flex xs12 text-xs-center grey--text lighten-2>
              &copy;{{ year }} — <strong>Euler Kids</strong> made with
              <v-icon color="grey" small>favorite</v-icon>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-footer>
    <Snackbar
      :snackbar="snackbar"
      :snackbar-settings="snackbarSettings"
      :styles="styles"
      :update-app="updateApp"
    />
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Login from "./views/Login/Parent";
import Snackbar from "./components/Snackbars/SnackbarSimple";
export default {
  name: "App",
  components: {
    Login,
    Snackbar
  },
  data() {
    return {
      snackbar: false,
      snackbarSettings: {
        y: "bottom",
        x: "right",
        timeout: 0,
        dark: true,
        text:
          "A new version of Euler Kids is available. Please update to get the lattes features"
      },
      absolute: true,
      icons: [
        {
          icon: "fab fa-facebook",
          to: "https://www.facebook.com/eulerkids/"
        },
        {
          icon: "fab fa-instagram",
          to: "https://instagram.com/eulerkids"
        }
      ]
    };
  },
  methods: {
    dialogOn() {
      if (this.$route.matched[0].path === "/reset/:token") {
        this.$router.push({ path: "/" });
      }

      this.$store.commit("dialogPayload", true);
    },
    dialogOff() {
      this.$store.commit("dialogPayload", false);
    },
    updateApp() {
      return window.location.reload();
    }
  },
  computed: {
    ...mapState({
      authenticated: state => state.authenticated,
      styles: state => state.styles,
      dialog: state => state.dialog
    }),
    year() {
      const currentTime = new Date();

      return currentTime.getFullYear();
    },
    toolbar() {
      return {
        home: "/",
        img: "rocket.svg",
        flags: [
          {
            text: "Español",
            img: "mexico.svg"
          },
          {
            text: "English",
            img: "usa.svg"
          }
        ]
      };
    }
  },
  created() {
    this.$store.dispatch("checkAppVersion").then(appVersion => {
      if (appVersion !== this.$store.state.appVersion) {
        this.snackbar = true;
      }
    });
  }
};
</script>

<style>
.grad1 {
  background: #e91e63;
  background: -webkit-linear-gradient(left top, #e91e63, #fbc02d);
  background: -o-linear-gradient(bottom right, #e91e63, #fbc02d);
  background: -moz-linear-gradient(bottom right, #e91e63, #fbc02d);
  background: linear-gradient(to bottom right, #e91e63, #fbc02d);
}

.grad2 {
  background: #9c27b0;
  background: -webkit-linear-gradient(left top, #9c27b0, #29b6f6);
  background: -o-linear-gradient(bottom right, #9c27b0, #29b6f6);
  background: -moz-linear-gradient(bottom right, #9c27b0, #29b6f6);
  background: linear-gradient(to bottom right, #9c27b0, #29b6f6);
}

.grad3 {
  background: #00c853;
  background: -webkit-linear-gradient(left top, #00c853, #b2ff59);
  background: -o-linear-gradient(bottom right, #00c853, #b2ff59);
  background: -moz-linear-gradient(bottom right, #00c853, #b2ff59);
  background: linear-gradient(to bottom right, #00c853, #b2ff59);
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>
