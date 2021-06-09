<template>
  <BaseSelect
    v-if="!arePreferredAttempts"
    v-model="preferredAttempts"
    label="Elige un nivel"
    :options="defaultAttemptsOptions"
  />
  <BaseInput
    v-else
    v-model="preferredAttempts"
    label="Ingresa el número de intentos"
    :error="validateNumber(preferredAttempts)"
    type="number"
    min="1"
  />
  <BaseCheckbox
    v-model="arePreferredAttempts"
    :label="arePreferredAttempts ? 'Personalizado' : 'Predefinidos'"
  />
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
