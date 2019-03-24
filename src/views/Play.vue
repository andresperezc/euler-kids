<template>
  <v-container grid-list-md>
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
              <Spinner
                v-if="spinner"
                class="mb-3"
                :color="styles.color"
                :size="size"
                :width="width"
              />
              <v-flex xs12 v-if="roomError">
                <div class="pink--text text-xs-center">
                  Ups! That EK Code doesn't exists or has expired!
                </div>
              </v-flex>
              <v-flex xs12 v-if="usernameError">
                <div class="pink--text text-xs-center">
                  Nickname already taken. Please choose another one.
                </div>
              </v-flex>
              <v-flex xs12 v-show="!spinner">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-if="step1"
                    class="mt-3 mx-3"
                    outline
                    autofocus
                    label="Enter your EK-Code"
                    v-model="EKCode"
                    :rules="EKCodeRules"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    v-if="step2"
                    class="mt-3 mx-3"
                    outline
                    autofocus
                    label="Enter a nickname"
                    v-model="nickname"
                    :rules="nicknameRules"
                  >
                  </v-text-field>
                </v-form>
              </v-flex>
              <v-flex xs12>
                <v-btn v-if="step1" dark :color="styles.color" @click="enter">
                  Enter
                </v-btn>
                <v-btn
                  v-if="step2"
                  :disabled="spinner"
                  :dark="!spinner"
                  :color="styles.color"
                  @click="checkDuplicates"
                >
                  Let's go!
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
const Spinner = () => import("../components/Spinners/Spinner");
export default {
  name: "Play",
  components: {
    Spinner
  },
  sockets: {
    checkIfRoomExistsPong() {
      this.step1 = false;
      this.step2 = true;
      this.spinner = false;
      this.roomError = false;
      this.$refs.form.resetValidation();
    },
    checkIfRoomExistsPongError() {
      this.spinner = false;
      this.roomError = true;
    },
    usernameTaken() {
      this.spinner = false;
      this.usernameError = true;
    },
    okGo() {
      this.spinner = false;
      this.$store.commit("gameNicknameAssigner", this.nickname);
      return this.$router.push({ path: `/lobby/${this.EKCode}` });
    }
  },
  data() {
    return {
      size: 60,
      width: 2,
      EKCode: "",
      nickname: "",
      step1: true,
      step2: false,
      spinner: false,
      roomError: false,
      usernameError: false,
      requiredErr: "This field is required",
      spaceErr: "This field has invalid characters",
      valid: true,
      insults: [
        "fuck",
        "tits",
        "penis",
        "peniz",
        "titz",
        "panoch",
        "shit",
        "zhit",
        "stupid",
        "idiot",
        "moron",
        "nazi",
        "hitler",
        "teta",
        "teto"
      ],
      EKCodeRules: [
        v => !!v || "This field is required",
        v => !!/^\w+$/.test(v) || "This field has invalid characters"
      ],
      nicknameRules: [
        v => !!v || "This field is required",
        v => !!/^\w+$/.test(v) || "This field has invalid characters",
        v => {
          if (this.insults.includes(v.toLowerCase())) {
            return "Sorry, that nickname is not allowed";
          }

          for (let insult of this.insults) {
            if (v.toLowerCase().includes(insult)) {
              return "Sorry, that nickname is not allowed";
            }

            if (
              v
                .toLowerCase()
                .replace(/_/g, "")
                .includes(insult)
            ) {
              return "Sorry, that nickname is not allowed";
            }
          }

          return false;
        }
      ]
    };
  },
  methods: {
    enter() {
      if (this.$refs.form.validate()) {
        this.spinner = true;
        this.roomError = false;
        this.$socket.emit("checkIfRoomExistsPing", this.EKCode);
      }
    },
    checkDuplicates() {
      if (this.$refs.form.validate()) {
        const data = {
          room: this.EKCode,
          username: this.nickname
        };
        this.$socket.emit("checkDuplicates", data);
        this.spinner = true;
        this.usernameError = false;
      }
    }
  },
  computed: {
    ...mapState({
      authenticated: state => state.authenticated,
      styles: state => state.styles
    })
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 25px;
}
</style>
