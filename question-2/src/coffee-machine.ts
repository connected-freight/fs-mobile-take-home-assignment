import { CoffeeMachineMode } from './models/coffee-machine-modes';

export class CoffeeMachine {
  constructor() {
    // TODO: User-defined code
  }

  async placeCup(): Promise<void> {
    // TODO: User-defined code
  }

  async placeBeans(beansName: string): Promise<void> {
    // TODO: User-defined code
  }

  async brewCoffee(): Promise<void> {
    // TODO: User-defined code
  }

  async removeCup(): Promise<void> {
    // TODO: User-defined code
  }

  async getCurrentMode(): Promise<CoffeeMachineMode> {
    // TODO: User-defined code
    return {
      modeName: 'idle',
      context: { beans: null, cup: null },
    };
  }
}
