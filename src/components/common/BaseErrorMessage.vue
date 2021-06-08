<template>
  <p :id="id" aria-live="assertive" class="mt-2 mb-6 text-sm text-red-500">
    <slot />
  </p>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "BaseErrorMessage",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
});
</script>
