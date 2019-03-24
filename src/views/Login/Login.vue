<template>
  <div>
    <Spinner
      v-if="spinner"
      class="mb-3"
      :color="color"
      :size="size"
      :width="width"
    />
    <ServerMsg :server-msg="serverMsg" :errors="serverErrors"> </ServerMsg>
    <v-layout v-if="!spinner" wrap>
      <v-flex xs12>
        <v-text-field
          label="Username"
          autofocus
          :color="color"
          required
          v-model="username"
          :error-messages="usernameErrors"
          @input="$v.username.$touch()"
          @blur="$v.username.$touch()"
          @keyup.enter="login"
        >
        </v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="Password"
          :color="color"
          required
          v-model="password"
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
          @keyup.enter="login"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          @click:append="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
        >
        </v-text-field>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <v-btn dark :color="color" :disabled="spinner" @click.native="login">
        Log in
      </v-btn>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Spinner from "../../components/Spinners/Spinner";
import ServerMsg from "../../components/ServerMsg/ErrorAlert";
export default {
  name: "Login",
  validations: {
    username: {
      required,
      noSpaces: value => {
        if (typeof value === "undefined" || value === null || value === "") {
          return true;
        }
        return /^\w+$/.test(value);
      }
    },
    password: { required }
  },
  props: [
    "color",
    "size",
    "width",
    "serverMsg",
    "serverErrors",
    "resetServerMsgData"
  ],
  components: {
    Spinner,
    ServerMsg
  },
  data() {
    return {
      e1: true,
      spinner: false,
      errors: [],
      username: "",
      password: "",
      passErr: "Password is required",
      userErr1: "Username is required",
      userErr2: "Username has invalid characters"
    };
  },
  methods: {
    clearForm() {
      this.$v.$reset();
      this.username = "";
      this.password = "";
    },
    login() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.spinner = true;

      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.spinner = false;
          this.clearForm();
          this.$emit("closeRegisterWindowLogin", false);
        })
        .catch(() => {
          this.clearForm();
          this.spinner = false;
        });
    }
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push(this.passErr);

      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push(this.userErr1);
      !this.$v.username.noSpaces && errors.push(this.userErr2);

      return errors;
    }
  },
  destroyed() {
    this.resetServerMsgData();
  }
};
</script>
