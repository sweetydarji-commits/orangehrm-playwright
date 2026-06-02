export class LoginPage {
constructor(page) {
  this.page = page;

  this.usernameInput = page.locator('input[name="username"]');
  this.passwordInput = page.locator('input[name="password"]');
  this.loginButton = page.locator('button[type="submit"]');

  this.errorMessage = page.getByText('Invalid credentials');
}
  async navigate() {
  await this.page.goto(process.env.BASE_URL);

  await this.usernameInput.waitFor({
    state: 'visible'
  });
}

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  async loginSuccess(username, password) {
    await this.login(username, password);

    await this.page.waitForURL('**/dashboard/**');

    await this.page
      .getByRole('heading', { name: 'Dashboard' })
      .waitFor();
  }

  async verifyInvalidLogin() {
    await this.errorMessage.waitFor();
  }
}