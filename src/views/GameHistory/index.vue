<template>
  <div class="flex justify-center items-center h-screen">
    <div class="container px-4 mx-auto">
      <h1
        class="
          inline-block
          text-4xl text-white
          font-extrabold
          tracking-tight
          mb-4
        "
      >
        Historial
      </h1>
      <p
        v-if="!gameHistory.length"
        class="text-center text-white text-2xl tracking-tight mb-4"
      >
        Historial vacío
      </p>

      <div
        v-else
        class="bg-gray-800 text-gray-300 shadow overflow-hidden sm:rounded-md"
      >
        <div class="divide-y divide-gray-300">
          <HistoryItem
            v-for="(history, index) in gameHistory"
            :key="index"
            :history="history"
          />
        </div>
      </div>

      <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div class="rounded-md shadow">
          <BaseButton color="secondary" @click="router.back()">
            Atrás
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useGame } from "@/store/game";
import HistoryItem from "./components/HistoryItem.vue";
import BaseButton from "@/components/common/BaseButton.vue";
import Game from "@/types/Game";

export default defineComponent({
  components: { HistoryItem, BaseButton },
  setup() {
    const { gameHistory } = useGame();
    const router = useRouter();

    return {
      gameHistory: gameHistory as readonly Game[],
      router,
    };
  },
});
</script>
