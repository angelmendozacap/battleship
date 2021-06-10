import { mount } from "@vue/test-utils";
import BaseSelect from "../BaseSelect.vue";

describe("BaseSelect", () => {
  it("should render input", () => {
    const options = [
      {
        value: "Val1",
        description: "Desc1",
      },
      {
        value: "Val2",
        description: "Desc2",
      },
    ];
    const wrapper = mount(BaseSelect, {
      props: { label: "Label", modelValue: "Value", options },
    });

    expect(wrapper.html()).toContain("Label");
    options.forEach((opt) => {
      expect(wrapper.find(`[value=${opt.value}]`)).toBeTruthy();
    });
  });
});
