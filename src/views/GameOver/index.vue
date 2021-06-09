<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-center container px-4 mx-auto">
      <h1 class="inline-block text-2xl tracking-tight mb-4">Juego terminado</h1>
      <p
        v-if="game.win"
        class="text-green-300 text-5xl font-extrabold tracking-tight mb-4"
      >
        Ganaste 🥳
        <span class="block text-white">Hundiste todas las naves</span>
      </p>
      <p
        v-else
        class="text-red-500 text-5xl font-extrabold tracking-tight mb-4"
      >
        Perdiste 😢
        <span class="block text-white">Casi hundes todas las naves</span>
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
