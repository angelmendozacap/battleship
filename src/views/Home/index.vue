<template>
  <div class="flex h-full h-screen">
    <main class="mx-auto max-w-7xl px-4 m-auto">
      <div class="text-center">
        <h1
          class="
            text-6xl
            tracking-tight
            font-extrabold
            text-white
            sm:text-7xl
            md:text-8xl
            uppercase
          "
        >
          <span class="inline">Battle</span>
          <span class="inline text-green-300">Ship</span>
        </h1>
        <p
          class="
            mt-3
            max-w-md
            mx-auto
            text-lg
            sm:text-xl
            md:mt-5
            md:text-2xl
            md:max-w-3xl
          "
        >
          El clásico combate naval
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <BaseButtonLink :to="{ name: 'Config' }">Comenzar</BaseButtonLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButtonLink from "@/components/common/BaseButtonLink.vue";

export default defineComponent({
  name: "Home",
  components: { BaseButtonLink },
});
</script>
