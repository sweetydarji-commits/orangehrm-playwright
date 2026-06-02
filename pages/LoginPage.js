export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.errorMessage = page.getByText('Invalid credentials');
  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL);
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