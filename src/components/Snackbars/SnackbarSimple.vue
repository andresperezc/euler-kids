<template>
  <v-snackbar
    v-model="snackbar"
    :color="styles.color"
    :bottom="snackbarSettings.y === 'bottom'"
    :left="snackbarSettings.x === 'left'"
    :right="snackbarSettings.x === 'right'"
    :top="snackbarSettings.y === 'top'"
    :timeout="snackbarSettings.timeout"
  >
    {{ snackbarSettings.text }}
    <v-btn dark flat @click="updateApp">
      Update
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackbarSimple",
  props: ["snackbar", "styles", "snackbarSettings", "updateApp"]
};
</script>

<style scoped></style>
