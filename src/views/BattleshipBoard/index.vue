<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="px-2 py-1 md:px-6 md:py-2 bg-blue-300 rounded shadow-inner">
      <BattleField />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BattleField from "@/components/BattleField/index.vue";

export default defineComponent({
  name: "BattleshipBoard",
  components: {
    BattleField,
  },
});
</script>
