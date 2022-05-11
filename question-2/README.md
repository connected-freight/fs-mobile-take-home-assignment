# Question 2

## Objectives
The assessment objectives of this question are as follows:
- Knowledge of advanced architectural concepts.
- Follows best practices.
- Code readability.
- Appropriate code structure.
- Appropriate naming of parameters, functions, types, classes, and fields.
- Appropriate use of comments.

## Instructions
In this scenario, we have a coffee machine that enters various modes when certain actions are received or conditions are met. You are to implement the coffee machine in the `coffee-machine.ts` file. The `CoffeeMachine` class is provided with signatures of the constructor and methods, which you are not to modify. You may only modify the constructor and method bodies.

### Modes
The coffee machine has 6 modes, which certain actions or conditions will cause a change from one to another:
- `idle`
- `cupPlaced`
- `beansPlaced`
- `ready`
- `brewing`
- `brewingComplete`

The `getCurrentMode()` method in `CoffeeMachine` will return the current mode the coffee machine is in, as well as any relevant information.

### Events
The coffee machine accepts 4 actions, which may cause a change from one mode to another:
- `placeCup()`
- `placeBeans(beansName: string)`
- `brewCoffee()`
- `removeCup()`

### Mode Changes
The valid mode changes are listed below. If invalid actions are received when the machine is on a certain mode, the machine should stay in that mode.

- Initial `idle`: This should be the first mode when `CoffeeMachine` is constructed. When `getCurrentMode()`, the return object should be as such:
  ```typescript
  {
    modeName: 'idle',
    context: { beans: null, cup: null },
  }
  ```

- From `idle` to `cupPlaced`: This mode change should only be performed when `placeCup()` is called. This change will set `cup` with null `coffee` in the context. When `getCurrentMode()` is called after `placeCup()`, the return object should be as such:
  ```typescript
  {
    modeName: 'cupPlaced',
    context: { beans: null, cup: { coffee: null } },
  }
  ```

- From `idle` to `beansPlaced`: This mode change should only be performed when `placeBeans()` is called. This change will set `beans` in the context with the value of the `beansName` parameter from `placeBeans()`. When `getCurrentMode()` is called after `placeBeans()`, the return object should be as such:
  ```typescript
  {
    modeName: 'beansPlaced',
    context: { beans: 'foobar', cup: null },
  }
  ```

- From `cupPlaced` to `ready`: This mode change should only be performed when `placeBeans()` is called. This change will set `beans` in the context with the value of the `beansName` parameter from `placeBeans()`. When `getCurrentMode()` is called after `placeBeans()`, the return object should be as such:
  ```typescript
  {
    modeName: 'ready',
    context: { beans: 'foobar', cup: { coffee: null } },
  }
  ```

- From `beansPlaced` to `ready`: This mode change should only be performed when `placeCup()` is called. This change will set `cup` with null `coffee` in the context. When `getCurrentMode()` is called after `placeCup()`, the return object should be as such:
  ```typescript
  {
    modeName: 'ready',
    context: { beans: 'foobar', cup: { coffee: null } },
  }
  ```

- From `ready` to `brewing`: This mode change should only be performed when `brewCoffee()` is called. This change will set `cup.coffee` with the value of `beans` in the context. When `getCurrentMode()` is called after `brewCoffee()`, the return object should be as such:
  ```typescript
  {
    modeName: 'brewing',
    context: { beans: 'foobar', cup: { coffee: 'foobar' } },
  }
  ```

- From `brewing` to `brewingComplete`: This mode change should only be performed when 3 seconds has elapsed after the change from `ready` to `brewing`. This change will set `beans` to null in the context. When `getCurrentMode()` is called after 3 seconds when the coffee machine has changed to the `brewing` mode, the return object should be as such:
  ```typescript
  {
    modeName: 'brewingComplete',
    context: { beans: null, cup: { coffee: 'foobar' } },
  }
  ```

- From `brewingComplete` to `idle`: This mode change should only be performed when `removeCup()` is called. This change will set `cup` to null in the context. When `getCurrentMode()` is called after this `removeCup()`, the return object should be as such:
  ```typescript
  {
    modeName: 'idle',
    context: { beans: null, cup: null },
  }
  ```

### Additional Instructions
- You may use any additional NPM packages as you deem fit, but you may not use any external API calls.
- You may create any additional files as necessary.
- You must not modify the signature of the constructor or any of the functions in `coffee-machine.ts`, you can only modify the body of the constructor and functions.
- You must not modify the `models/coffee-machine-modes.ts` file in any way.
- You must not modify the `__tests__/coffee-machine.test.ts` file in any way.
- You may create additional unit tests in a separate file from `__tests__/coffee-machine.test.ts`.
