<template>
  <BaseCheckbox v-model="arePreferredAttempts" label="Niveles predefinidos" />
  <BaseSelect
    v-if="arePreferredAttempts"
    v-model="preferredAttempts"
    label="Niveles predefinidos"
    :options="defaultAttemptsOptions"
  />
  <BaseInput
    v-else
    v-model="preferredAttempts"
    label="Número de intentos personalizado"
    :error="validateNumber(preferredAttempts)"
    type="number"
    min="1"
  />
  <div>{{ typeof config.numberOfAttempts }} {{ config.numberOfAttempts }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseInput from "@/components/common/BaseInput.vue";
import BaseSelect from "@/components/common/BaseSelect.vue";
import BaseCheckbox from "@/components/common/BaseCheckbox.vue";
import { useInputs } from "./useInputs";

export default defineComponent({
  name: "Inputs",
  components: { BaseInput, BaseSelect, BaseCheckbox },
  setup() {
    const state = useInputs();
    return state;
  },
});
</script>
