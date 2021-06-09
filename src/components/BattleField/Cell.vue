<template>
  <div v-if="cell.miss" class="cell miss"></div>
  <div v-else-if="cell.shipName && cell.boom" class="cell boom relative"></div>
  <div v-else class="cell" @click="handleAttack"></div>
</template>

<script lang="ts">
import { Cell } from "@/types/Cell";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Cell",
  props: {
    cell: {
      type: Object as PropType<Cell>,
      required: true,
    },
    cellIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const handleAttack = () => {
      emit("attack", props.cellIndex);
    };

    return {
      handleAttack,
    };
  },
});
</script>

<style lang="postcss" scoped>
.cell {
  @apply border border-blue-400 border-opacity-80 cursor-pointer;
}

.cell:not(.boom):not(.miss):hover {
  @apply bg-blue-200 bg-opacity-70 transition duration-100 transition-colors;
}

.miss,
.boom {
  @apply flex justify-center items-center;
}

.miss {
  @apply bg-blue-200 bg-opacity-70;
}

.boom {
  @apply bg-red-200 bg-opacity-70;
}

.boom::after,
.miss::after {
  content: "";
  position: absolute;
  border-radius: 100%;
  width: 2vmin;
  height: 2vmin;
}

.miss::after {
  @apply bg-blue-500;
}

.boom::after {
  @apply bg-red-500;
}

.miss::before {
  content: "";
  position: absolute;
  animation: hit 0.2s ease-out forwards;
  border: 1vmin solid white;
  border-radius: 100%;
  width: 2vmin;
  height: 2vmin;
}

@keyframes hit {
  0% {
    opacity: 1;
    transform: scale(0);
  }

  100% {
    opacity: 0;
    transform: scale(4);
  }
}
</style>
