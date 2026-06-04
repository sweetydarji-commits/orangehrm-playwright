# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\addUser.spec.js >> @smoke Add New User
- Location: tests\ui\addUser.spec.js:6:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]') to be visible

```

# Test source

```ts
  1  | export class LoginPage {
  2  | constructor(page) {
  3  |   this.page = page;
  4  | 
  5  |   this.usernameInput = page.locator('input[name="username"]');
  6  |   this.passwordInput = page.locator('input[name="password"]');
  7  |   this.loginButton = page.locator('button[type="submit"]');
  8  | 
  9  |   this.errorMessage = page.getByText('Invalid credentials');
  10 | }
  11 |   async navigate() {
  12 |   await this.page.goto(process.env.BASE_URL);
  13 | 
> 14 |   await this.usernameInput.waitFor({
     |                            ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  15 |     state: 'visible'
  16 |   });
  17 | }
  18 | 
  19 |  async login(username, password) {
  20 | 
  21 |   await this.usernameInput.fill(username);
  22 |   await this.passwordInput.fill(password);
  23 | 
  24 |   await this.loginButton.click();
  25 | 
  26 |   await this.page.waitForURL(/dashboard/);
  27 | }
  28 | 
  29 |   async loginSuccess(username, password) {
  30 |     await this.login(username, password);
  31 | 
  32 |     await this.page.waitForURL('**/dashboard/**');
  33 | 
  34 |     await this.page
  35 |       .getByRole('heading', { name: 'Dashboard' })
  36 |       .waitFor();
  37 |   }
  38 | 
  39 |   async verifyInvalidLogin() {
  40 |     await this.errorMessage.waitFor();
  41 |   }
  42 | }
```