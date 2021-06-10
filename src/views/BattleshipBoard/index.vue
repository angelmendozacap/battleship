<template>
  <div
    class="
      min-h-screen
      flex
      justify-center
      items-center
      lg:container lg:mx-auto
    "
  >
    <BattleField />
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
