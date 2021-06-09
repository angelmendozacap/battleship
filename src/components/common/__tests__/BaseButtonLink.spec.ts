import { mount } from "@vue/test-utils";
import BaseButtonLink from "../BaseButtonLink.vue";
import router from "@/router";

describe("BaseButtonLink", () => {
  it("should render Primary style", () => {
    const color = "primary";
    const wrapper = mount(BaseButtonLink, {
      props: { color, to: { name: "Home" } },
      global: {
        plugins: [router],
      },
    });

    const primaryClasses = [
      "text-gray-900",
      "bg-green-300",
      "hover:bg-green-400",
    ];

    primaryClasses.forEach((className) => {
      expect(wrapper.find("a").classes()).toContain(className);
    });
  });

  it("should render Primary default style", () => {
    const wrapper = mount(BaseButtonLink, {
      props: { to: { name: "Home" } },
      global: {
        plugins: [router],
      },
    });

    const primaryClasses = [
      "text-gray-900",
      "bg-green-300",
      "hover:bg-green-400",
    ];

    primaryClasses.forEach((className) => {
      expect(wrapper.find("a").classes()).toContain(className);
    });
  });

  it("should render Secondary style", () => {
    const color = "secondary";
    const wrapper = mount(BaseButtonLink, {
      props: { color, to: { name: "Home" } },
      global: {
        plugins: [router],
      },
    });

    const secondaryClasses = [
      "text-gray-900",
      "bg-gray-100",
      "hover:bg-gray-200",
    ];

    secondaryClasses.forEach((className) => {
      expect(wrapper.find("a").classes()).toContain(className);
    });
  });
});
