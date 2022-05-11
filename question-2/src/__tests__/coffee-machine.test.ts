import { CoffeeMachine } from '../coffee-machine';
import {
  BEANS_PLACED_MODE_NAME,
  BREWING_COMPLETE_MODE_NAME,
  BREWING_MODE_NAME,
  CoffeeMachineMode,
  CUP_PLACED_MODE_NAME,
  IDLE_MODE_NAME,
  READY_MODE_NAME,
} from '../models/coffee-machine-modes';

describe('Question 2', () => {
  it('Should be in the idle mode when no action is performed', async () => {
    const coffeeMachine = new CoffeeMachine();
    const currentMode = await coffeeMachine.getCurrentMode();

    const expectedMode: CoffeeMachineMode = {
      modeName: IDLE_MODE_NAME,
      context: { beans: null, cup: null },
    };
    expect(currentMode).toEqual(expectedMode);
  });

  it('Should change to cupPlaced mode', async () => {
    const coffeeMachine = new CoffeeMachine();
    await coffeeMachine.placeCup();
    const currentMode = await coffeeMachine.getCurrentMode();

    const expectedMode: CoffeeMachineMode = {
      modeName: CUP_PLACED_MODE_NAME,
      context: { beans: null, cup: { coffee: null } },
    };
    expect(currentMode).toEqual(expectedMode);
  });

  it('Should change to beansPlaced mode', async () => {
    const coffeeMachine = new CoffeeMachine();
    await coffeeMachine.placeBeans('Colombian');
    const currentMode = await coffeeMachine.getCurrentMode();

    const expectedMode: CoffeeMachineMode = {
      modeName: BEANS_PLACED_MODE_NAME,
      context: { beans: 'Colombian', cup: null },
    };
    expect(currentMode).toEqual(expectedMode);
  });

  it('Should change to ready mode when placeCup() is called last', async () => {
    const coffeeMachine = new CoffeeMachine();
    await coffeeMachine.placeBeans('Colombian');
    await coffeeMachine.placeCup();
    const currentMode = await coffeeMachine.getCurrentMode();

    const expectedMode: CoffeeMachineMode = {
      modeName: READY_MODE_NAME,
      context: { beans: 'Colombian', cup: { coffee: null } },
    };
    expect(currentMode).toEqual(expectedMode);
  });

  it('Should change to ready mode when placeBeans() is called last', async () => {
    const coffeeMachine = new CoffeeMachine();
    await coffeeMachine.placeCup();
    await coffeeMachine.placeBeans('Colombian');
    const currentMode = await coffeeMachine.getCurrentMode();

    const expectedMode: CoffeeMachineMode = {
      modeName: READY_MODE_NAME,
      context: { beans: 'Colombian', cup: { coffee: null } },
    };
    expect(currentMode).toEqual(expectedMode);
  });

  it('Should change to brewing mode', async () => {
    const coffeeMachine = new CoffeeMachine();
    await coffeeMachine.placeCup();
    await coffeeMachine.placeBeans('Colombian');
    await coffeeMachine.brewCoffee();
    const currentMode = await coffeeMachine.getCurrentMode();

    const expectedMode: CoffeeMachineMode = {
      modeName: BREWING_MODE_NAME,
      context: { beans: 'Colombian', cup: { coffee: 'Colombian' } },
    };
    expect(currentMode).toEqual(expectedMode);
  });

  it('Should change to brewingComplete mode', async () => {
    const coffeeMachine = new CoffeeMachine();
    await coffeeMachine.placeCup();
    await coffeeMachine.placeBeans('Colombian');
    await coffeeMachine.brewCoffee();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const currentMode = await coffeeMachine.getCurrentMode();

    const expectedMode: CoffeeMachineMode = {
      modeName: BREWING_COMPLETE_MODE_NAME,
      context: { beans: null, cup: { coffee: 'Colombian' } },
    };
    expect(currentMode).toEqual(expectedMode);
  });

  it('Should change to idle mode', async () => {
    const coffeeMachine = new CoffeeMachine();
    await coffeeMachine.placeCup();
    await coffeeMachine.placeBeans('Colombian');
    await coffeeMachine.brewCoffee();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    await coffeeMachine.removeCup();
    const currentMode = await coffeeMachine.getCurrentMode();

    const expectedMode: CoffeeMachineMode = {
      modeName: IDLE_MODE_NAME,
      context: { beans: null, cup: null },
    };
    expect(currentMode).toEqual(expectedMode);
  });

  it('Should do nothing if placeCup() is called on a brewingComplete mode', async () => {
    const coffeeMachine = new CoffeeMachine();
    await coffeeMachine.placeCup();
    await coffeeMachine.placeBeans('Colombian');
    await coffeeMachine.brewCoffee();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    await coffeeMachine.placeCup();
    const currentMode = await coffeeMachine.getCurrentMode();

    const expectedMode: CoffeeMachineMode = {
      modeName: BREWING_COMPLETE_MODE_NAME,
      context: { beans: null, cup: { coffee: 'Colombian' } },
    };
    expect(currentMode).toEqual(expectedMode);
  });

  it('Should do nothing if brewCoffee() is called on a cupPlaced mode', async () => {
    const coffeeMachine = new CoffeeMachine();
    await coffeeMachine.placeCup();
    await coffeeMachine.brewCoffee();
    const currentMode = await coffeeMachine.getCurrentMode();

    const expectedMode: CoffeeMachineMode = {
      modeName: CUP_PLACED_MODE_NAME,
      context: { beans: null, cup: { coffee: null } },
    };
    expect(currentMode).toEqual(expectedMode);
  });
});
