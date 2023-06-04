# Extra information regarding rule choices

## Reasoning

### [`@typescript-eslint/no-extraneous-class`](https://typescript-eslint.io/rules/no-extraneous-class/) [Off]

Having a class wrap utility functions can be useful to group those functions.
It can make it more clear as to what is happening. 

## Under consideration

### [`@typescript-eslint/sort-type-constituents`](https://typescript-eslint.io/rules/sort-type-constituents/) [On]

Sorting type constituents can sometimes be annoying, e.g.:
```ts
type LogLevel = 'info' | 'trace' | 'debug' | 'warn' | 'error' | 'fatal';
type LogLevelSorted = 'debug' | 'error' | 'fatal' | 'info' | 'trace' | 'warn';
```
Here `LogLevel` was originally sorted by increasing severity, but this order is lost when using this rule.

### [`@typescript-eslint/explicit-module-boundary-types`](https://typescript-eslint.io/rules/explicit-module-boundary-types/) [Off]
### [`@typescript-eslint/explicit-function-return-type`](https://typescript-eslint.io/rules/explicit-function-return-type) [Off]
