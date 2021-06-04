<template>
  <label
    v-if="label"
    class="block text-sm font-medium text-gray-700"
    :for="uuid"
  >
    {{ label }}
  </label>
  <select
    v-bind="{
      ...$attrs,
      onChange: updateValue,
    }"
    :id="uuid"
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
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
    <option selected disabled>Select</option>
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import setupFormComponent from "@/features/setupFormComponent";
import uniqueID from "@/features/uniqueID";
import BaseErrorMessage from "@/components/common/BaseErrorMessage.vue";
export default {
  name: "BaseSelect",
  components: {
    BaseErrorMessage,
  },
  props: {
    options: {
      type: Array,
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
};
</script>
