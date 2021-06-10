<template>
  <div
    class="lg:w-full lg:flex lg:flex-row lg:justify-between xl:justify-around"
  >
    <div
      class="
        px-2
        py-1
        md:px-6 md:py-2
        bg-blue-300
        rounded
        shadow-inner
        mb-6
        lg:mb-0
      "
    >
      <div class="battleship-grid border-board">
        <Cell
          v-for="(cell, index) in computerCells"
          :key="index"
          :cell="cell"
          :cell-index="index"
          @attack="setCellAttacked"
        />
      </div>
    </div>
    <div class="rounded text-lg lg:text-2xl">
      <p class="lg:text-center mb-6">
        Intentos restantes
        <span class="block font-bold text-white mt-1">{{
          config.numberOfAttempts === Infinity
            ? "Ilimitados"
            : config.numberOfAttempts
        }}</span>
      </p>
      <p class="lg:text-center">
        Estado del combate
        <span
          class="block font-bold mt-1"
          :class="[
            sunkenShipsInfo.destroyed ? 'text-red-400' : 'text-yellow-300',
          ]"
          >{{ sunkenShipsInfo.info || "Empezando" }}</span
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useBattleField } from "./useBattleField";
import Cell from "./Cell.vue";
import { useConfig } from "@/store/config";
import { useGame } from "@/store/game";

export default defineComponent({
  name: "BattleField",
  components: {
    Cell,
  },
  setup() {
    const router = useRouter();
    const {
      cells: computerCells,
      setCellAttacked,
      sunkenShipsInfo,
    } = useBattleField();
    const { config } = useConfig();
    const { game } = useGame();
    watchEffect(() => {
      if (game.over) router.push({ name: "GameOver" });
    });

    return {
      config,
      sunkenShipsInfo,
      computerCells,
      setCellAttacked,
    };
  },
});
</script>

<style lang="postcss" scoped>
.battleship-grid {
  --board-size: 8.5vmin;
  @apply grid bg-blue-100;
  margin: 2vmin;
  grid-template-rows: repeat(10, var(--board-size));
  grid-template-columns: repeat(10, var(--board-size));

  background-image: url("@/assets/waves.svg"), url("@/assets/waves.svg"),
    url("@/assets/waves.svg"), url("@/assets/waves.svg"),
    url("@/assets/waves.svg"), url("@/assets/waves.svg"),
    url("@/assets/waves.svg");
  background-repeat: no-repeat;
  background-size: 10vmin;
  background-position: -10% 30%, 40% -10%, 110% 70%, 10% 100%, 85% 20%, 30% 50%,
    70% 85%;
}

@media (min-width: 640px) {
  .battleship-grid {
    --board-size: 8vmin;
  }
}

.border-board {
  @apply border border-blue-400 border-opacity-80;
}
</style>
