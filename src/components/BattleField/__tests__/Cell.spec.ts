import { mount } from "@vue/test-utils";
import Cell from "../Cell.vue";

describe("Cell", () => {
  it("should emmit click attack", async () => {
    const wrapper = mount(Cell, {
      props: {
        cell: {
          taken: false,
          boom: false,
          miss: false,
          shipName: "",
        },
        cellIndex: 10,
      },
    });

    await wrapper.find(".cell").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()).toHaveProperty("attack");
    expect(wrapper.emitted().attack[0]).toEqual([10]);
  });

  it("should render boom cell", () => {
    const wrapper = mount(Cell, {
      props: {
        cell: {
          taken: false,
          boom: true,
          miss: false,
          shipName: "Submarine",
        },
        cellIndex: 10,
      },
    });

    expect(wrapper.find(".cell").classes()).toContain("boom");
  });
});
