<template>
  <div v-if="cell.miss" class="bg-gray-100"></div>
  <div v-else-if="cell.shipName && cell.boom" class="bg-red-500"></div>
  <div v-else @click="handleAttack"></div>
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
  emits: { attack: (index: number) => index },
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
