<template>
  <div class="flex items-center">
    <input
      v-bind="{ ...$attrs, onChange: updateValue }"
      :id="uuid.toString()"
      :checked="modelValue"
      type="checkbox"
      class="
        h-4
        w-4
        text-green-400
        focus:ring-green-300
        border-gray-300
        rounded
      "
    />
    <label
      v-if="label"
      :for="uuid.toString()"
      class="ml-2 block text-sm select-none"
    >
      {{ label }}
    </label>
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
  name: "BaseCheckBox",
  components: {
    BaseErrorMessage,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
    },
    error: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const uuid = uniqueID().getID();
    const { updateValue } = setupFormComponent(props, context);
    return {
      updateValue,
      uuid,
    };
  },
});
</script>
