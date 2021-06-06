/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function useValidator() {
  const validateNumber = (value: number) => {
    const parseValue = Number(value);
    if (isNaN(parseValue)) {
      return "Debe ser un número entero";
    }

    return "";
  };

  return {
    validateNumber,
  };
}
