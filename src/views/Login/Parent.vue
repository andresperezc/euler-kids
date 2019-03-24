<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-text>
          <v-flex xs1 offset-xs11>
            <v-btn
              flat
              icon
              color="grey darken-1"
              @click.native="closeRegistration"
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-flex>
          <v-container grid-list-md>
            <Login
              v-if="login"
              :color="styles.color"
              :size="size"
              :width="width"
              :serverMsg="serverMsg"
              :serverErrors="serverErrors"
              :resetServerMsgData="resetServerMsgData"
              @closeRegisterWindowLogin="closeRegistration"
            />
            <SignUp
              v-if="signUp"
              :color="styles.color"
              :size="size"
              :width="width"
              :serverMsg="serverMsg"
              :serverErrors="serverErrors"
              :resetServerMsgData="resetServerMsgData"
              @closeRegisterWindowSignUp="closeRegistration"
            />
            <div v-if="login" class="text-xs-center mt-1">
              <router-link
                to=""
                :class="styles.textColor"
                @click.native="forgotPassword"
              >
                Forgot password?
              </router-link>
            </div>
          </v-container>
          <v-divider />
          <div v-if="login" :class="styles.text" class="text-xs-center">
            Don’t have an account?
            <v-btn :color="styles.color" flat @click.native="toSignUp">
              Sign up
            </v-btn>
          </div>
          <div v-if="signUp" :class="styles.text" class="text-xs-center">
            Already have an account?
            <v-btn :color="styles.color" flat @click.native="toLogin">
              Log in
            </v-btn>
          </div>
          <div v-if="forgotPass" :class="styles.text" class="text-xs-center">
            <v-btn :color="styles.color" flat @click.native="toLogin">
              Back to log in
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Login from "./Login";
import SignUp from "./SignUp";
import { mapState } from "vuex";
export default {
  name: "Parent",
  props: ["dialog"],
  components: {
    Login,
    SignUp
  },
  data() {
    return {
      size: 60,
      width: 2,
      login: true,
      signUp: false,
      forgotPass: false
    };
  },
  methods: {
    closeRegistration: function() {
      this.$emit("closeRegisterWindow", false);
      this.allOff();
    },
    toSignUp() {
      this.login = false;
      this.signUp = true;
      this.forgotPass = false;
    },
    toLogin() {
      this.login = true;
      this.signUp = false;
      this.forgotPass = false;
    },
    forgotPassword() {
      this.login = false;
      this.signUp = false;
      this.forgotPass = true;
    },
    allOff() {
      this.resetServerMsgData();
      this.login = false;
      this.signUp = false;
      this.forgotPass = false;
    },
    resetServerMsgData() {
      this.$store.commit("serverMsgPayload", {
        message: null,
        errors: []
      });
    }
  },
  computed: {
    ...mapState({
      serverMsg: state => state.serverMsg,
      serverErrors: state => state.serverErrors,
      styles: state => state.styles
    })
  },
  watch: {
    dialog(val) {
      if (val) {
        this.toLogin();
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
