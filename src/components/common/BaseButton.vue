<template>
  <button
    class="
      text-center
      w-full
      flex
      items-center
      justify-center
      px-8
      py-3
      border border-transparent
      text-base
      font-medium
      rounded-md
      md:py-4
      md:text-lg
      md:px-10
    "
    :class="colorStyles"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },
  setup(props) {
    const colorStyles = computed(() => {
      return {
        "text-gray-900 bg-green-300 hover:bg-green-400":
          props.color === "primary",
        "text-gray-900 bg-gray-100 hover:bg-gray-200":
          props.color === "secondary",
      };
    });

    return {
      colorStyles,
    };
  },
});
</script>
