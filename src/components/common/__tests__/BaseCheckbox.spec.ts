import { mount } from "@vue/test-utils";
import BaseCheckbox from "../BaseCheckbox.vue";

describe("BaseCheckbox", () => {
  it("should render input", () => {
    const wrapper = mount(BaseCheckbox, {
      props: { label: "Label", modelValue: true },
    });

    const inputID = wrapper.find<HTMLInputElement>("input").element.id;
    const labelFor = wrapper.find<HTMLLabelElement>("label").element.htmlFor;

    expect(inputID).toEqual(labelFor);
    expect(wrapper.html()).toContain("Label");
  });

  it("should render input with error", () => {
    const wrapper = mount(BaseCheckbox, {
      props: { label: "Label", modelValue: true, error: "Error" },
    });

    expect(wrapper.html()).toContain("Label");
    expect(wrapper.html()).toContain("Error");
  });
});
