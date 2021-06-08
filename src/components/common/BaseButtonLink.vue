<template>
  <router-link
    class="
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
      text-gray-900
      bg-green-300
      hover:bg-green-400
      md:py-4
      md:text-lg
      md:px-10
    "
    :to="to"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRouter, RouteLocationRaw } from "vue-router";

export default defineComponent({
  name: "BaseButtonLink",
  props: {
    to: {
      type: Object as PropType<RouteLocationRaw>,
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
});
</script>
