<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-card-title class="headline font-weight-light" primary-title>
          Game starts in
        </v-card-title>
        <v-card-text>
          <div
            :class="styles.textColor"
            class="text-xs-center display-4 font-weight-light"
          >
            {{ counterInit }}
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "GameStartsInDialog",
  props: ["dialog", "styles", "counterInit"]
};
</script>
