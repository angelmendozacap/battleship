/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
let UUID = 1;

export default function UniqueID() {
  const getID = () => {
    UUID++;
    return UUID;
  };

  return {
    getID,
  };
}
