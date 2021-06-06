/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function setupFormComponent(props: any, { emit }: any) {
  const updateValue = (event: Event) => {
    const el = event.target as HTMLInputElement;
    let val: any = el.value;

    if (el.type === "checkbox") val = el.checked;
    if (el.type === "radio") val = props.value;

    emit("update:modelValue", val);
  };

  return { updateValue };
}
