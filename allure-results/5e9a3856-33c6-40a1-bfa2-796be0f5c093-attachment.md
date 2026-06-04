# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\loginNegative.spec.js >> @regression Invalid Password
- Location: tests\ui\loginNegative.spec.js:9:9

# Error details

```
ReferenceError: loginPage is not defined
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/customFixture';
  2  | import { LoginPage } from '../../pages/LoginPage';
  3  | import { loginData } from '../../test-data/loginData';
  4  | 
  5  | loginData
  6  |   .filter(data => data.expected === 'fail')
  7  |   .forEach(data => {
  8  | 
  9  |     test(`@regression ${data.testName}`, async ({ page }) => {
  10 | 
  11 | 
> 12 |       await loginPage.navigate();
     |       ^ ReferenceError: loginPage is not defined
  13 | 
  14 |       await loginPage.login(
  15 |         data.username,
  16 |         data.password
  17 |       );
  18 | 
  19 |       await loginPage.verifyInvalidLogin();
  20 | 
  21 |     });
  22 | 
  23 | });
```