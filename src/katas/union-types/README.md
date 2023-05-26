Implement a type that resolves to an ISO 8601 Date of any year/month/day from the year 2020 until 2099. 

Days should only allow values between 01 and 31
Months should only allow values between 01 and 12
Years should only allow values between 2020 and 2099

for example:

```ts
    const date: IsoDate = '2024-01-01'  // works
    const date: IsoDate = '01-01-2024' // errors

    const date: IsoDate = '2099-12-31' // works
    const date: IsoDate = '1995-01-01' // errors
 ```


Tip:

Feel free to create more than 1 type to get to your desired outcome, for example:
```ts
    type DD = 01 to 31
    type MM = 01 to 12
    type YYYY = 2020 to 2099
```
Resources:
+ https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html