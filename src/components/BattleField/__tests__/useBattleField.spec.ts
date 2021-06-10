import { mount } from "@vue/test-utils";
import { useConfig } from "@/store/config";
import { useBattleField } from "../useBattleField";
import { ShipNames } from "@/types/Ship";

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

    const shipNamesArray = [
      ShipNames.BATTLESHIP,
      ShipNames.CRUISER,
      ShipNames.DESTROYER,
      ShipNames.SUBMARINE,
    ];

    shipNamesArray.forEach((shipName) => {
      const firstIndexTaken = wrapper.vm.cells.findIndex(
        (cell) => cell.shipName === shipName
      );
      wrapper.vm.setCellAttacked(firstIndexTaken);

      expect(wrapper.vm.cells[firstIndexTaken].boom).toBeTruthy();
    });
  });

  it("should setCellAttacked and wins", async () => {
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

    wrapper.vm.setAttempts(100);

    const shipNamesArray = [
      ShipNames.BATTLESHIP,
      ShipNames.CRUISER,
      ShipNames.DESTROYER,
      ShipNames.SUBMARINE,
    ];

    shipNamesArray.forEach((shipName) => {
      const cellShipType = wrapper.vm.cells.filter(
        (cell) => cell.shipName === shipName && !cell.boom
      );

      cellShipType.forEach((cell) => {
        const cellIndex = wrapper.vm.cells.indexOf(cell);
        console.log(cellIndex);
        wrapper.vm.setCellAttacked(cellIndex);
        expect(wrapper.vm.cells[cellIndex].boom).toBeTruthy();
      });
    });
  });

  it("should setCellAttacked with no attempts", async () => {
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

    wrapper.vm.setAttempts(0);

    const firstIndexNotTaken = wrapper.vm.cells.findIndex(
      (cell) => !cell.taken
    );
    wrapper.vm.setCellAttacked(firstIndexNotTaken);

    expect(wrapper.vm.config.numberOfAttempts).toEqual(-1);
  });

  it("should setCellAttacked with no taken cell", async () => {
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

    const firstIndexNotTaken = wrapper.vm.cells.findIndex(
      (cell) => !cell.taken
    );
    wrapper.vm.setCellAttacked(firstIndexNotTaken);

    expect(wrapper.vm.cells[firstIndexNotTaken].miss).toBeTruthy();
  });
});
