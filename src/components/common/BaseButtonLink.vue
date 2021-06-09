<template>
  <router-link
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
      md:py-4 md:text-lg md:px-10
    "
    :class="colorStyles"
    :to="to"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { useRouter, RouteLocationRaw } from "vue-router";

export default defineComponent({
  name: "BaseButtonLink",
  props: {
    to: {
      type: Object as PropType<RouteLocationRaw>,
      required: true,
    },
    color: {
      type: String,
      default: "primary",
    },
  },
  setup(props) {
    const router = useRouter();
    const colorStyles = computed(() => {
      return {
        "text-gray-900 bg-green-300 hover:bg-green-400":
          props.color === "primary",
        "text-gray-900 bg-gray-100 hover:bg-gray-200":
          props.color === "secondary",
      };
    });

    return {
      router,
      colorStyles,
    };
  },
});
</script>
