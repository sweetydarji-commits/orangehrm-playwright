export class AddUserPage {
  constructor(page) {
    this.page = page;
  }

  async openAddUserForm() {
    await this.page.getByRole('link', { name: 'Admin' }).click();

    await this.page.getByRole('button', { name: 'Add' }).click();
  }

  async fillUserForm(username, password) {

    const dropdowns = this.page.locator('.oxd-select-text');

    // User Role
    await dropdowns.nth(0).click();
    await this.page.getByRole('option', { name: 'ESS' }).click();

    // Employee Name
    await this.page
      .getByPlaceholder('Type for hints...')
      .fill('a');

    await this.page.waitForTimeout(2000);

    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

    // Status
    await dropdowns.nth(1).click();
    await this.page.getByRole('option', { name: 'Enabled' }).click();

    // Username
    await this.page.locator('input.oxd-input').nth(2).fill(username);

    // Password
    await this.page.locator('input[type="password"]').nth(0).fill(password);
    await this.page.locator('input[type="password"]').nth(1).fill(password);

    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}

export default AddUserPage;