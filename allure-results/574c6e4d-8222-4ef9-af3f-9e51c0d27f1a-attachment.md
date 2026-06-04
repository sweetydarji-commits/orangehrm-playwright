# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\loginNegative.spec.js >> Negative Login Tests >> @regression Invalid Username
- Location: tests\ui\loginNegative.spec.js:5:7

# Error details

```
Error: page.goto: NS_ERROR_NET_INTERRUPT
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - heading "Secure Connection Failed" [level=1] [ref=e5]
    - paragraph [ref=e6]: An error occurred during a connection to opensource-demo.orangehrmlive.com. PR_END_OF_FILE_ERROR
    - paragraph [ref=e7]: "Error code: PR_END_OF_FILE_ERROR"
    - list [ref=e9]:
      - listitem [ref=e10]: The page you are trying to view cannot be shown because the authenticity of the received data could not be verified.
      - listitem [ref=e11]: Please contact the website owners to inform them of this problem.
    - paragraph [ref=e12]:
      - link "Learn more…" [ref=e13] [cursor=pointer]:
        - /url: https://support.mozilla.org/1/firefox/150.0.2/WINNT/en-US/connection-not-secure
  - button "Try Again" [active] [ref=e15]
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
> 19 |     await this.page.goto(process.env.BASE_URL, {
     |                     ^ Error: page.goto: NS_ERROR_NET_INTERRUPT
  20 |       waitUntil: 'domcontentloaded'
  21 |     });
  22 | 
  23 |     await this.usernameInput.waitFor({
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