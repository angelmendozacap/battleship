/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { readonly, Ref, ref } from "vue";

export function useState<T>(initialState: T) {
  const state = ref(initialState) as Ref<T>;
  const setState = (newState: T) => {
    state.value = newState;
  };

  return [readonly(state), setState];
}
