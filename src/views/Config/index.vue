<template>
  <div class="h-screen flex items-center">
    <div class="container mx-auto px-4">
      <h1
        class="
          inline-block
          text-4xl text-white
          font-extrabold
          tracking-tight
          mb-4
        "
      >
        Configuración
      </h1>
      <Inputs />
      <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div class="rounded-md shadow">
          <BaseButtonLink :to="{ name: 'BattleshipBoard' }"
            >Listo para la batalla</BaseButtonLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Inputs from "./components/Inputs.vue";
import BaseButtonLink from "@/components/common/BaseButtonLink.vue";

export default defineComponent({
  name: "Config",
  components: { Inputs, BaseButtonLink },
});
</script>
