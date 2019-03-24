<template>
  <transition
    mode="in-out"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <v-btn
      :color="pointsColor(missed)"
      dark
      small
      absolute
      top
      rigth
      fab
      v-if="showPoints"
    >
      {{ pointsNumber(classroomRush, spaceBattle, missed) }}
    </v-btn>
  </transition>
</template>

<script>
export default {
  name: "GameBtn",
  props: [
    "beforeEnter",
    "enter",
    "leave",
    "missed",
    "pointsColor",
    "pointsNumber",
    "classroomRush",
    "spaceBattle",
    "showPoints"
  ]
};
</script>
