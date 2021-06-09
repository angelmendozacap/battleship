import { mount } from "@vue/test-utils";
import { useConfig } from "@/store/config";
import { useBattleField } from "../useBattleField";

describe("useBattleField", () => {
  it("should setCellAttacked", async () => {
    const wrapper = mount({
      setup() {
        const { config, setAttempts } = useConfig();
        const { cells, setCellAttacked } = useBattleField();

        return {
          config,
          setAttempts,
          cells,
          setCellAttacked,
        };
      },
      template: `
      <div class="flex justify-center w-full">
        <div class="battleship-grid border-board">
        </div>
      </div>`,
    });

    await wrapper.vm.$nextTick();

    wrapper.vm.setAttempts(10);

    const firstIndexTaken = wrapper.vm.cells.findIndex((cell) => cell.taken);
    wrapper.vm.setCellAttacked(firstIndexTaken);

    expect(wrapper.vm.config.numberOfAttempts).toEqual(9);
  });
});
