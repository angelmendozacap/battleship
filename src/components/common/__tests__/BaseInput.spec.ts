import { mount } from "@vue/test-utils";
import BaseInput from "../BaseInput.vue";

describe("BaseInput", () => {
  it("should render input", () => {
    const wrapper = mount(BaseInput, {
      props: { label: "Label", modelValue: "Value" },
    });

    expect(wrapper.html()).toContain("Label");
    expect(wrapper.find("input").classes()).toContain("input");
    expect(wrapper.find("input").classes()).toContain("valid");
  });

  it("should render input with error", () => {
    const wrapper = mount(BaseInput, {
      props: { label: "Label", modelValue: "Value", error: "Error" },
    });

    expect(wrapper.html()).toContain("Label");
    expect(wrapper.find("input").classes()).toContain("input");
    expect(wrapper.find("input").classes()).toContain("invalid");
  });
});
