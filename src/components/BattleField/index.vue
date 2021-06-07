<template>
  <div class="flex justify-center w-full">
    <div class="battleship-grid border-board">
      <Cell
        v-for="(cell, index) in computerCells"
        :key="index"
        class="border-board"
        :cell="cell"
        :cell-index="index"
        @attack="setCellAttacked"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useBattleField } from "./useBattleField";
import Cell from "@/components/Cell.vue";
import { useConfig } from "@/store/config";
import { useGame } from "@/store/game";

export default defineComponent({
  name: "BattleField",
  components: {
    Cell,
  },
  setup() {
    const router = useRouter();
    const { cells: computerCells, setCellAttacked } = useBattleField();
    const { config } = useConfig();
    const { game } = useGame();
    watchEffect(() => {
      if (game.over) router.push({ name: "GameOver" });
    });

    return {
      config,
      computerCells,
      setCellAttacked,
    };
  },
});
</script>

<style lang="postcss" scoped>
.battleship-grid {
  @apply grid bg-blue-100;
  margin: 2vmin;
  grid-template-rows: repeat(10, 8vmin);
  grid-template-columns: repeat(10, 8vmin);

  background-image: url("@/assets/waves.svg"), url("@/assets/waves.svg"),
    url("@/assets/waves.svg"), url("@/assets/waves.svg"),
    url("@/assets/waves.svg"), url("@/assets/waves.svg"),
    url("@/assets/waves.svg");
  background-repeat: no-repeat;
  background-size: 10vmin;
  background-position: -10% 30%, 40% -10%, 110% 70%, 10% 100%, 85% 20%, 30% 50%,
    70% 85%;
}
.border-board {
  @apply border border-blue-400 border-opacity-80;
}
</style>
