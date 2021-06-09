import { mount } from "@vue/test-utils";
import BattleField from "../index.vue";
import Cell from "../Cell.vue";
import router from "@/router";

describe("BattleField", () => {
  it("should render the board", async () => {
    const wrapper = mount(BattleField, {
      global: {
        plugins: [router],
        components: {
          Cell,
        },
      },
    });

    await wrapper.vm.$nextTick();

    const cellComponent = wrapper.findComponent(Cell);

    expect(wrapper.vm.computerCells).toHaveLength(100);
    expect(cellComponent.classes()).toContain("cell");
  });
});
