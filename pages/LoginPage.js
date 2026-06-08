import { expect } from '@playwright/test';

export class LoginPage {

  constructor(page) {
    this.page = page;

    this.usernameInput =
      page.locator('input[name="username"]');

    this.passwordInput =
      page.locator('input[name="password"]');

    this.loginButton =
      page.locator('button[type="submit"]');
  }

 async navigate() {
  await this.page.goto(
  process.env.BASE_URL,
  {
      waitUntil: 'domcontentloaded',
      timeout: 60000
  }
);

  await expect(
    this.usernameInput
  ).toBeVisible({
    timeout: 30000
  });
}
async login(username, password) {

  await this.usernameInput.fill(username);

  await this.passwordInput.fill(password);

  await this.loginButton.click();

}

  async verifyInvalidLogin() {

  const errorMessage =
    this.page.locator(
      '.oxd-alert-content-text'
    );

  await errorMessage.waitFor({
    state: 'visible',
    timeout: 15000
  });

  await expect(
    errorMessage
  ).toContainText(
    'Invalid credentials'
  );

}
}