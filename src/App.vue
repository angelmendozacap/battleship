<template>
  <BattleField />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BattleField from "@/components/BattleField/index.vue";

export default defineComponent({
  name: "App",
  components: {
    BattleField,
  },
});
</script>
