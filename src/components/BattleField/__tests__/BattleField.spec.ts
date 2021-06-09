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

    wrapper.findComponent(Cell).vm.$emit("attack", 0);

    expect(wrapper.vm.computerCells).toHaveLength(100);
  });
});
