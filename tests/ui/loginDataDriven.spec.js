export class AddUserPage {
  constructor(page) {
    this.page = page;

    this.adminMenu = page.locator('span:has-text("Admin")');
    this.addButton = page.locator('button', { hasText: 'Add' });

    this.userRoleDropdown = page.locator('.oxd-select-text').nth(0);
    this.statusDropdown = page.locator('.oxd-select-text').nth(1);

    this.employeeInput = page.getByPlaceholder('Type for hints...');
    this.usernameInput = page.locator('input.oxd-input').nth(2);

    this.passwordInputs = page.locator('input[type="password"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async openAddUserForm() {
    await this.adminMenu.click();

    // wait for page to fully load
    await this.page.waitForLoadState('networkidle');

    // stable wait for Add button
    await this.addButton.waitFor({ state: 'visible', timeout: 15000 });

    await this.addButton.click();
  }

  async fillUserForm(username, password) {

    // USER ROLE
    await this.userRoleDropdown.click();
    await this.page.getByRole('option', { name: 'ESS' }).click();

    // EMPLOYEE NAME (stable selection)
    await this.employeeInput.fill('a');
    await this.page.waitForTimeout(1500);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

    // STATUS
    await this.statusDropdown.click();
    await this.page.getByRole('option', { name: 'Enabled' }).click();

    // USERNAME
    await this.usernameInput.fill(username);

    // PASSWORD
    await this.passwordInputs.nth(0).fill(password);
    await this.passwordInputs.nth(1).fill(password);

    // SAVE
    await this.saveButton.click();

    // IMPORTANT: wait for save completion
    await this.page.waitForTimeout(2000);
  }
}

export default AddUserPage;