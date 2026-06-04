# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\userJourney.spec.js >> Complete User Journey
- Location: tests\e2e\userJourney.spec.js:6:5

# Error details

```
Error: page.goto: NS_ERROR_NET_INTERRUPT
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

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
  - button "Try Again" [ref=e15]
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
     |                   ^ Error: page.goto: NS_ERROR_NET_INTERRUPT
  13 | 
  14 |   await this.usernameInput.waitFor({
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