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
    <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div class="rounded-md shadow">
        <BaseButton color="primary" @click="tryAgain">
          Intentar de nuevo
        </BaseButton>
      </div>
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <BaseButtonLink color="secondary" :to="{ name: 'GameHistory' }"
          >Historial de juegos</BaseButtonLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useConfig } from "@/store/config";
import { useGame } from "@/store/game";
import BaseButtonLink from "@/components/common/BaseButtonLink.vue";
import BaseButton from "@/components/common/BaseButton.vue";

export default defineComponent({
  name: "GameOver",
  components: { BaseButtonLink, BaseButton },
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
