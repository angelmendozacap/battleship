/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ref } from "@vue/reactivity";
import { useConfig } from "@/store/config";
import { useValidator } from "@/features/validator";
import { watchEffect } from "@vue/runtime-core";

export function useInputs() {
  const arePreferredAttempts = ref(false);
  const preferredAttempts = ref(0);
  const { config, defaultAttemptsOptions, setAttempts, setPreferAttempts } =
    useConfig();
  const { validateNumber } = useValidator();

  watchEffect(() => {
    setPreferAttempts(arePreferredAttempts.value);
    setAttempts(preferredAttempts.value);
  });

  return {
    arePreferredAttempts,
    preferredAttempts,
    config,
    setAttempts,
    setPreferAttempts,
    defaultAttemptsOptions,
    validateNumber,
  };
}
