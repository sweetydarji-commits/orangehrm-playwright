# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.js >> @smoke Valid Login
- Location: tests\ui\login.spec.js:3:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - img "company-branding"
    - generic [ref=e8]:
      - heading "Login" [level=5] [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e12]:
          - paragraph [ref=e13]: "Username : Admin"
          - paragraph [ref=e14]: "Password : admin123"
        - generic [ref=e15]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - generic [ref=e19]: 
              - generic [ref=e20]: Username
            - textbox "Username" [active] [ref=e22]
          - generic [ref=e24]:
            - generic [ref=e25]:
              - generic [ref=e26]: 
              - generic [ref=e27]: Password
            - textbox "Password" [ref=e29]
          - button "Login" [ref=e31] [cursor=pointer]
          - paragraph [ref=e33] [cursor=pointer]: Forgot your password?
      - generic [ref=e34]:
        - generic [ref=e35]:
          - link [ref=e36] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e39] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e42] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e48]:
          - paragraph [ref=e49]: OrangeHRM OS 5.8
          - paragraph [ref=e50]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e51] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - generic [ref=e52]:
    - img "orangehrm-logo"
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
  23 |     await this.usernameInput.waitFor({
  24 |       state: 'visible'
  25 |     });
  26 |   }
  27 | 
  28 |   // For successful login only
  29 |   async loginSuccess(username, password) {
> 30 |     await this.usernameInput.fill(username);
     |                              ^ Error: locator.fill: value: expected string, got undefined
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