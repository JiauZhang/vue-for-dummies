<script setup lang="ts">
import { defineProps } from "vue";
// props are readonly!
const props = defineProps({
  propOne: {
    type: Number,
    default: 1,
  },
  propTwo: {
    type: String,
    default: "Getting Started!",
  },
});
</script>

<template>
  <h2>{{ propOne }}. {{ propTwo }}</h2>
</template>
