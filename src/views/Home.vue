<template>
  <h1>Home</h1>
  <router-link :to="{ name: 'Config' }">Start Game</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
