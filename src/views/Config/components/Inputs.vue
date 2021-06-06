<template>
  <input
    id="preferAttempts"
    v-model="arePreferredAttempts"
    type="checkbox"
    name="preferAttempts"
  />
  <BaseSelect
    v-if="!config.preferAttempts"
    v-model="config.numberOfAttempts"
    label="Default Attempts"
    :options="defaultAttemptsOptions"
  />
  <BaseInput
    v-else
    v-model="preferredAttempts"
    label="Attempts"
    type="text"
    :error="validateNumber(preferredAttempts)"
  />
  <div>{{ typeof config.numberOfAttempts }} {{ config.numberOfAttempts }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseInput from "@/components/common/BaseInput.vue";
import BaseSelect from "@/components/common/BaseSelect.vue";
import { useInputs } from "./useInputs";

export default defineComponent({
  name: "Inputs",
  components: { BaseInput, BaseSelect },
  setup() {
    const state = useInputs();
    return state;
  },
});
</script>
