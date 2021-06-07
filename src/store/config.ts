/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Config from "@/types/Config";
import { computed, reactive, readonly } from "vue";

const config: Config = reactive({
  numberOfAttempts: 0,
});

export function useConfig() {
  function setAttempts(attempts: number) {
    config.numberOfAttempts = Number(attempts);
  }

  const defaultAttemptsOptions = computed(() => [
    { value: Infinity, description: "Fácil (turnos infinitos)" },
    { value: 100, description: "Medio (turnos infinitos)" },
    { value: 50, description: "Difícil (turnos infinitos)" },
  ]);

  return readonly({
    config,
    setAttempts,
    defaultAttemptsOptions,
  });
}
