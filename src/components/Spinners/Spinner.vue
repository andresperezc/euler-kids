<template>
  <v-layout row wrap>
    <v-flex>
      <div class="text-xs-center mt-3">
        <v-progress-circular
          indeterminate
          :color="color"
          :size="size"
          :width="width"
        >
        </v-progress-circular>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["size", "width", "color"],
  name: "Spinner"
};
</script>
