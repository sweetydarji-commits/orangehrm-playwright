
import { expect } from '@playwright/test';
export class AddUserPage {

  constructor(page) {

    this.page = page;

    this.adminMenu =
      page.locator('span:has-text("Admin")');

    this.addButton =
      page.getByRole('button',
      { name: 'Add' });

    this.userRoleDropdown =
      page.locator('.oxd-select-text').nth(0);

    this.statusDropdown =
      page.locator('.oxd-select-wrapper').nth(1);

    this.employeeInput =
      page.getByPlaceholder(
        'Type for hints...'
      );

    this.usernameInput =
      page.locator(
        'input.oxd-input'
      ).nth(2);

    this.passwordInput =
      page.locator(
        'input[type="password"]'
      ).nth(0);

    this.confirmPasswordInput =
      page.locator(
        'input[type="password"]'
      ).nth(1);

    this.saveButton =
      page.getByRole(
        'button',
        { name: 'Save' }
      );
  }
  async openAddUserForm() {
    await this.page.waitForLoadState('networkidle');

  this.adminMenu = this.page.getByRole('link', { name: 'Admin' });
  await this.adminMenu.click();

  await this.page.waitForURL(/admin/);

  await this.addButton.waitFor({
    state: 'visible'
  });

  await this.addButton.click();

await expect(this.page).toHaveURL(/saveSystemUser/);
}

  async fillUserForm(
    username,
    password
  ) {
await this.statusDropdown.waitFor({ state: 'visible' });
    await this.userRoleDropdown.waitFor({
      state: 'visible'
    });

    await this.userRoleDropdown.click();

    await this.page
      .getByRole('option',
      { name: 'ESS' })
      .click();

    await this.employeeInput.fill('Linda');

    await this.page.waitForSelector(
      '.oxd-autocomplete-option'
    );

    await this.page
      .locator(
        '.oxd-autocomplete-option'
      )
      .first()
      .click();

  await this.statusDropdown.waitFor({
  state: 'visible'
});

await this.statusDropdown.click();

await this.page.getByRole('option', {
  name: 'Enabled'
}).click();


    await this.usernameInput.fill(
      username
    );

    await this.passwordInput.fill(
      password
    );

    await this.confirmPasswordInput.fill(
      password
    );

    await this.saveButton.click();
  }

}