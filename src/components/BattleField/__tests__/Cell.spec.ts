import { ShipNames } from "@/types/Ship";
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
          taken: true,
          boom: true,
          miss: false,
          ship: {
            id: 4,
            name: ShipNames.BATTLESHIP,
            size: 4,
            directions: {
              horizontal: [0, 1, 2, 3],
              vertical: [0, 10, 10 * 2, 10 * 3],
            },
            count: 1,
          },
        },
        cellIndex: 10,
      },
    });

    expect(wrapper.find(".cell").classes()).toContain("boom");
  });
});
