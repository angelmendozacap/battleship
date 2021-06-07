<template>
  <p :id="id" aria-live="assertive" class="mt-2 text-sm text-red-600">
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
