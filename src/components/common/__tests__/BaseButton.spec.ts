import { mount } from "@vue/test-utils";
import BaseButton from "../BaseButton.vue";

describe("BaseButton", () => {
  it("should render Primary style", () => {
    const color = "primary";
    const wrapper = mount(BaseButton, {
      props: { color },
      slots: {
        default: "Btn Message",
      },
    });

    const primaryClasses = [
      "text-gray-900",
      "bg-green-300",
      "hover:bg-green-400",
    ];

    expect(wrapper.find("button").html()).toContain("Btn Message");
    primaryClasses.forEach((className) => {
      expect(wrapper.find("button").classes()).toContain(className);
    });
  });

  it("should render Primary default style", () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: "Btn Message",
      },
    });

    const primaryClasses = [
      "text-gray-900",
      "bg-green-300",
      "hover:bg-green-400",
    ];

    expect(wrapper.find("button").html()).toContain("Btn Message");
    primaryClasses.forEach((className) => {
      expect(wrapper.find("button").classes()).toContain(className);
    });
  });

  it("should render Secondary style", () => {
    const color = "secondary";
    const wrapper = mount(BaseButton, {
      props: { color },
      slots: {
        default: "Btn Message",
      },
    });

    const secondaryClasses = [
      "text-gray-900",
      "bg-gray-100",
      "hover:bg-gray-200",
    ];

    expect(wrapper.find("button").html()).toContain("Btn Message");
    secondaryClasses.forEach((className) => {
      expect(wrapper.find("button").classes()).toContain(className);
    });
  });
});
