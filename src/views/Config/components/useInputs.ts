/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ref, computed } from "@vue/reactivity";
import { useConfig } from "@/store/config";
import { useValidator } from "@/features/validator";

export function useInputs() {
  const arePreferredAttempts = ref(false);
  const { config, defaultAttemptsOptions, setAttempts } = useConfig();
  const { validateNumber } = useValidator();

  const preferredAttempts = computed({
    get() {
      return config.numberOfAttempts;
    },
    set(value: number) {
      const attempts = Number(value);
      if (isNaN(attempts)) {
        setAttempts(0);
      } else {
        setAttempts(attempts);
      }
    },
  });

  return {
    arePreferredAttempts,
    preferredAttempts,
    config,
    setAttempts,
    defaultAttemptsOptions,
    validateNumber,
  };
}
