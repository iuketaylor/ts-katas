Implement a type that takes in 3 generics and uses conditional logic to assign the correct value to the type.

C = condition

T = value 1

F = value 2

If condition is true then assign the type value 1 else assign the type value 2

For example:

```ts
type Luke = If<true, 'Luke', 'Bob'>  // expected to be 'Luke'
type Taylor = If<false, 'Johnson', 'Taylor'> // expected to be 'Taylor'
```

Resources:
+ https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

