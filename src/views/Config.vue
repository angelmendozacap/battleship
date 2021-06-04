<template>
  <h1 class="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">
    Config
  </h1>
  <BaseInput
    v-model="config.attempts"
    label="Attempts"
    type="text"
    :error="validateNumber(config.attempts)"
  />
  <BaseSelect
    v-model="config.defaultAttempt"
    label="Default Attempts"
    :options="[10, 20, 30]"
  />
  <div>{{ typeof config.attempts }} {{ typeof config.defaultAttempt }}</div>
  <router-link :to="{ name: 'BattleshipBoard' }">
    Ready for the battle
  </router-link>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseInput from "@/components/common/BaseInput.vue";
import BaseSelect from "@/components/common/BaseSelect.vue";

export default defineComponent({
  name: "Config",
  components: { BaseInput, BaseSelect },
  setup() {
    const config = ref({
      attempts: 0,
      defaultAttempt: 0,
    });

    const validateNumber = (value: number) => {
      const parseValue = Number(value);
      if (isNaN(parseValue)) {
        return "Debe ser un número entero";
      }

      return "";
    };

    return {
      config,
      validateNumber,
    };
  },
});
</script>
