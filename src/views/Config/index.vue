<template>
  <h1 class="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">
    Config
  </h1>
  <Inputs />
  <router-link :to="{ name: 'BattleshipBoard' }">
    Ready for the battle
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Inputs from "./components/Inputs.vue";

export default defineComponent({
  name: "Config",
  components: { Inputs },
});
</script>
