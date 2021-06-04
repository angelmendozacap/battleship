<template>
  <p :id="id" aria-live="assertive" class="mt-2 text-sm text-red-600">
    <slot />
  </p>
</template>

<script>
export default {
  name: "BaseErrorMessage",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
