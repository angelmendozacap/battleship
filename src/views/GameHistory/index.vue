<template>
  <div>
    <p v-if="!gameHistory.length">Historial vacío</p>
    <div v-for="(history, index) in gameHistory" v-else :key="index">
      {{ history }}
    </div>
    <button @click="router.back()">Atrás</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useGame } from "@/store/game";

export default defineComponent({
  setup() {
    const { gameHistory } = useGame();
    const router = useRouter();

    return {
      gameHistory,
      router,
    };
  },
});
</script>
