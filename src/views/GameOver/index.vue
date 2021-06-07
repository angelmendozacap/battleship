<template>
  <div>
    <h1>Juego terminado</h1>
    <p v-if="game.win">
      Ganaste 🥳
      <span>Hundiste todas las naves</span>
    </p>
    <p v-else>
      Perdiste 😢
      <span>Casi hundes todas las naves</span>
    </p>
    <button @click="tryAgain">Intentar de nuevo</button>
    <router-link :to="{ name: 'GameHistory' }">Historial de juegos</router-link>
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
    const { resetGame, game } = useGame();
    const { setAttempts } = useConfig();

    function tryAgain() {
      resetGame();
      setAttempts(0);

      router.push({ name: "Config" });
    }

    return {
      game,
      tryAgain,
    };
  },
});
</script>
