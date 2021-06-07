<template>
  <label
    v-if="label"
    class="block text-sm font-medium text-gray-700"
    :for="uuid.toString()"
  >
    {{ label }}
  </label>
  <select
    v-bind="{
      ...$attrs,
      onChange: updateValue,
    }"
    :id="uuid.toString()"
    class="
      mt-1
      block
      w-full
      pl-3
      pr-10
      py-2
      text-base
      border-gray-300
      focus:outline-none
      focus:ring-indigo-500
      focus:border-indigo-500
      sm:text-sm
      rounded-md
    "
    :value="modelValue"
    :aria-describedby="error ? `${uuid}-error` : undefined"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :selected="option.value === modelValue"
    >
      {{ option.description }}
    </option>
  </select>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { defineComponent, PropType } from "vue";

import setupFormComponent from "@/features/setupFormComponent";
import uniqueID from "@/features/uniqueID";
import BaseErrorMessage from "@/components/common/BaseErrorMessage.vue";

interface Option {
  value: string | number | undefined;
  description: string;
}

export default defineComponent({
  name: "BaseSelect",
  components: {
    BaseErrorMessage,
  },
  props: {
    options: {
      type: Object as PropType<readonly Option[]>,
      required: true,
    },
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
      required: true,
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
