**TypeScript katas for iBL**


This repo contains TypeScript specific katas for the iBL team. 


**How to start**
+ Read the readme in the kata you are doing

```ts
    src > katas > conditional-types > README.md
```

Then open [name].ts to do the kata

```ts
    src > katas > conditional-types > conditional-types.ts
```

If you want to have a look at the solution, go to [name].solution.ts

```ts
    src > katas > conditional-types > conditional-types.solution.ts
```



**How do I know if I've completed a kata?**

This repo uses some utils that compare types. Once the types are equal, the error will go away.

```ts
    type Tests = [
        Expect<Equal<ExpectedType, YourType>> // <-- if true error will go
    ]
```


