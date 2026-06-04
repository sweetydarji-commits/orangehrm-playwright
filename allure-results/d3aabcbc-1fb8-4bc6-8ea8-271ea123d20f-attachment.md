# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\loginNegative.spec.js >> Negative Login Tests >> @regression Invalid Password
- Location: tests\ui\loginNegative.spec.js:17:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "500 Internal Server Error" [level=1] [ref=e3]
  - separator [ref=e4]
  - generic [ref=e5]: nginx/1.18.0 (Ubuntu)
```

# Test source

```ts
  1  | export class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     this.usernameInput =
  6  |       page.locator('input[name="username"]');
  7  | 
  8  |     this.passwordInput =
  9  |       page.locator('input[name="password"]');
  10 | 
  11 |     this.loginButton =
  12 |       page.getByRole('button', { name: 'Login' });
  13 | 
  14 |     this.errorMessage =
  15 |       page.locator('.oxd-alert-content-text');
  16 |   }
  17 | 
  18 |   async navigate() {
  19 |     await this.page.goto(process.env.BASE_URL, {
  20 |       waitUntil: 'domcontentloaded'
  21 |     });
  22 | 
> 23 |     await this.usernameInput.waitFor({
     |                              ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  24 |       state: 'visible'
  25 |     });
  26 |   }
  27 | 
  28 |   // For successful login only
  29 |   async loginSuccess(username, password) {
  30 |     await this.usernameInput.fill(username);
  31 |     await this.passwordInput.fill(password);
  32 | 
  33 |     await this.loginButton.click();
  34 | 
  35 |     await this.page.waitForURL(/dashboard/);
  36 |   }
  37 | 
  38 |   // For negative login tests
  39 |   async login(username, password) {
  40 |     await this.usernameInput.fill(username);
  41 |     await this.passwordInput.fill(password);
  42 | 
  43 |     await this.loginButton.click();
  44 |   }
  45 | }
```