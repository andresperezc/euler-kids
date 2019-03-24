<template>
  <v-alert v-if="serverMsg" outline color="error" icon="warning" :value="true">
    {{ serverMsg }}
    <ul v-for="error in errors" :key="error.msg">
      <li>{{ error.msg }}</li>
    </ul>
  </v-alert>
</template>

<script>
export default {
  name: "ErrorAlert",
  props: ["serverMsg", "errors"]
};
</script>
