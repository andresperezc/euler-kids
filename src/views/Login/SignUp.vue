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
          :color="color"
          required
          v-model="username"
          :error-messages="usernameErrors"
          @input="$v.username.$touch()"
          @blur="$v.username.$touch()"
          @keyup.enter="signUp"
        >
        </v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="Email"
          :color="color"
          required
          v-model="email"
          :error-messages="emailErrors"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          @keyup.enter="signUp"
        >
        </v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="Password"
          :color="color"
          counter
          required
          v-model="password"
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
          @keyup.enter="signUp"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          @click:append="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
        >
        </v-text-field>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <v-btn dark :color="color" :disabled="spinner" @click.native="signUp">
        Sign Up
      </v-btn>
      <div>
        <small>
          By signing up you agree to our Privacy Policy and Terms of Use
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import Spinner from "../../components/Spinners/Spinner";
import ServerMsg from "../../components/ServerMsg/ErrorAlert";
export default {
  name: "SignUp",
  validations: {
    username: {
      required,
      minLength: minLength(6),
      noSpaces: value => {
        if (typeof value === "undefined" || value === null || value === "") {
          return true;
        }
        return /^\w+$/.test(value);
      },
      noNumbersBeginning: value => {
        if (typeof value === "undefined" || value === null || value === "") {
          return true;
        }
        return !/^\d/.test(value);
      },
      onlyAscci: value => {
        if (typeof value === "undefined" || value === null || value === "") {
          return true;
        }

        return /^[\w]+$/.test(value);
      }
    },
    email: { required, email },
    password: {
      required,
      minLength: minLength(8),
      onlyAscci: value => {
        if (typeof value === "undefined" || value === null || value === "") {
          return true;
        }

        return /^[\w]+$/.test(value);
      }
    },
    role: {
      required
    }
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
      username: "",
      password: "",
      email: "",
      roles: ["Artista", "Estudio", "Proveedor"],
      role: null,
      passErr1: "Password is required",
      passErr2: "Password must be at least 8 characters",
      passErr3: "Password has invalid characters",
      userErr1: "Username is required",
      userErr2: "Username has invalid characters",
      userErr3: "Username must be at least 6 characters",
      emailErr1: "Must be a valid email",
      emailErr2: "Email is required",
      roleErr1: "El tipo de perfil es requerido"
    };
  },
  methods: {
    clearForm() {
      this.$v.$reset();
      this.username = "";
      this.email = "";
      this.password = "";
    },
    signUp() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.spinner = true;

      // this.$store
      //   .dispatch("signUp", {
      //     username: this.username,
      //     email: this.email,
      //     password: this.password,
      //     role: this.role
      //   })
      //   .then(() => {
      //     this.spinner = false;
      //     this.clearForm();
      //     this.$emit("closeRegisterWindowSignUp", false);
      //   })
      //   .catch(() => {
      //     this.clearForm();
      //     this.spinner = false;
      //   });
    }
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push(this.passErr1);
      !this.$v.password.minLength && errors.push(this.passErr2);
      !this.$v.password.onlyAscci && errors.push(this.passErr3);

      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.minLength && errors.push(this.userErr3);
      !this.$v.username.required && errors.push(this.userErr1);
      !this.$v.username.noSpaces && errors.push(this.userErr2);
      !this.$v.username.noNumbersBeginning && errors.push(this.userErr2);
      !this.$v.username.onlyAscci && errors.push(this.userErr2);

      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push(this.emailErr1);
      !this.$v.email.required && errors.push(this.emailErr2);

      return errors;
    },
    roleErrors() {
      const errors = [];
      if (!this.$v.role.$dirty) return errors;
      !this.$v.role.required && errors.push(this.roleErr1);

      return errors;
    }
  },
  destroyed() {
    this.resetServerMsgData();
  }
};
</script>
