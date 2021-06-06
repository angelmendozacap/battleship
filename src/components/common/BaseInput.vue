<template>
  <label
    v-if="label"
    class="block text-sm font-medium text-gray-700"
    :for="uuid"
  >
    {{ label }}
  </label>
  <div class="mt-1 relative rounded-md shadow-sm">
    <input
      v-bind="{
        ...$attrs,
        onInput: updateValue,
      }"
      :id="uuid"
      class="input"
      :value="modelValue"
      :placeholder="label"
      :aria-describedby="error ? `${uuid}-error` : null"
      :aria-invalid="error ? true : false"
      :class="[!!error ? 'invalid' : 'valid']"
    />
    <div
      class="
        absolute
        inset-y-0
        right-0
        pr-3
        flex
        items-center
        pointer-events-none
      "
    >
      <svg
        v-if="error"
        class="h-5 w-5 text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        :aria-hidden="!!error"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import setupFormComponent from "@/features/setupFormComponent";
import uniqueID from "@/features/uniqueID";
import BaseErrorMessage from "@/components/common/BaseErrorMessage.vue";

export default defineComponent({
  name: "BaseInput",
  components: {
    BaseErrorMessage,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, context) {
    const { updateValue } = setupFormComponent(props, context);
    const uuid = uniqueID().getID();
    return {
      updateValue,
      uuid,
    };
  },
});
</script>

<style lang="postcss" scoped>
.error {
}

.input {
  @apply block w-full rounded-md;
}

.input.valid {
  @apply focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300;
}

.input.invalid {
  @apply border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm pr-10;
}
</style>
