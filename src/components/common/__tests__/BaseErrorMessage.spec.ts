import { mount } from "@vue/test-utils";
import BaseErrorMessage from "../BaseErrorMessage.vue";

describe("BaseErrorMessage", () => {
  it("should render", () => {
    const errMsg = "Error Message";
    const wrapper = mount(BaseErrorMessage, {
      props: { id: "10" },
      slots: {
        default: errMsg,
      },
    });

    expect(wrapper.html()).toContain(errMsg);
  });
});
