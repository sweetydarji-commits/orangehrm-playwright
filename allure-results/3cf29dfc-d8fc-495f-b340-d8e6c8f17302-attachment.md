# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\loginNegative.spec.js >> Negative Login Tests >> @regression Invalid Password
- Location: tests\ui\loginNegative.spec.js:17:7

# Error details

```
TypeError: loginPage.verifyInvalidLogin is not a function
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/customFixture.js';
  2  | 
  3  | test.describe('Negative Login Tests', () => {
  4  | 
  5  |   test('@regression Invalid Username', async ({ loginPage }) => {
  6  | 
  7  |     await loginPage.navigate();
  8  | 
  9  | await loginPage.login(
  10 |   'wronguser',
  11 |   'admin123'
  12 | );
  13 | 
  14 |     await loginPage.verifyInvalidLogin();
  15 |   });
  16 | 
  17 |   test('@regression Invalid Password', async ({ loginPage }) => {
  18 | 
  19 |     await loginPage.navigate();
  20 | 
  21 |     await loginPage.login(
  22 |   'Admin',
  23 |   'wrongpassword'
  24 | );
> 25 |     await loginPage.verifyInvalidLogin();
     |                     ^ TypeError: loginPage.verifyInvalidLogin is not a function
  26 |   });
  27 | 
  28 | });
```