<template>
  <div>
    <h1>Juego terminado</h1>
    <button @click="tryAgain">Intentar de nuevo</button>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { useConfig } from "@/store/config";
import { useGame } from "@/store/game";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameOver",
  setup() {
    const router = useRouter();
    const { resetGame } = useGame();
    const { setAttempts } = useConfig();

    function tryAgain() {
      resetGame();
      setAttempts(0);

      router.push({ name: "Config" });
    }

    return {
      tryAgain,
    };
  },
});
</script>
