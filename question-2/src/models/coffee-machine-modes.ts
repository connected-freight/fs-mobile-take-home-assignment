export const IDLE_MODE_NAME = 'idle';
export const CUP_PLACED_MODE_NAME = 'cupPlaced';
export const BEANS_PLACED_MODE_NAME = 'beansPlaced';
export const READY_MODE_NAME = 'ready';
export const BREWING_MODE_NAME = 'brewing';
export const BREWING_COMPLETE_MODE_NAME = 'brewingComplete';

export type CoffeeMachineModeName =
  | typeof IDLE_MODE_NAME
  | typeof CUP_PLACED_MODE_NAME
  | typeof BEANS_PLACED_MODE_NAME
  | typeof READY_MODE_NAME
  | typeof BREWING_MODE_NAME
  | typeof BREWING_COMPLETE_MODE_NAME;

export interface CoffeeMachineMode {
  modeName: CoffeeMachineModeName;
  context: CoffeeMachineModeContext;
}

export interface CoffeeMachineModeContext {
  beans: string | null;
  cup: Cup | null;
}

export interface Cup {
  coffee: string | null;
}
