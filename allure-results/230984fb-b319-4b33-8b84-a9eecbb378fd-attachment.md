# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\admin.spec.js >> Admin Module >> @smoke Search Existing User
- Location: tests\ui\admin.spec.js:11:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

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
> 12 |   await this.page.goto(process.env.BASE_URL);
     |                   ^ Error: page.goto: Test timeout of 60000ms exceeded.
  13 | 
  14 |   await this.usernameInput.waitFor({
  15 |     state: 'visible'
  16 |   });
  17 | }
  18 | 
  19 |   async login(username, password) {
  20 |     await this.usernameInput.fill(username);
  21 |     await this.passwordInput.fill(password);
  22 | 
  23 |     await this.loginButton.click();
  24 |   }
  25 | 
  26 |   async loginSuccess(username, password) {
  27 |     await this.login(username, password);
  28 | 
  29 |     await this.page.waitForURL('**/dashboard/**');
  30 | 
  31 |     await this.page
  32 |       .getByRole('heading', { name: 'Dashboard' })
  33 |       .waitFor();
  34 |   }
  35 | 
  36 |   async verifyInvalidLogin() {
  37 |     await this.errorMessage.waitFor();
  38 |   }
  39 | }
```