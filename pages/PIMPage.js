import { expect } from '@playwright/test';

export class PIMPage {

  constructor(page) {

    this.page = page;

    this.pimMenu =
      page.getByRole('link', { name: 'PIM' });

    this.addButton =
      page.getByRole('button', { name: 'Add' });

    this.firstNameInput =
      page.locator('input[name="firstName"]');

    this.lastNameInput =
      page.locator('input[name="lastName"]');

    this.saveButton =
      page.locator('button[type="submit"]');

    this.employeeDetailsHeader =
      page.getByText('Personal Details');
  }

  async openPIMPage() {

    await this.pimMenu.click();

    await this.page.waitForURL(/pim/);
  }

  async clickAddEmployee() {

    await this.addButton.click();
  }

  async addEmployee(firstName, lastName) {

    await this.firstNameInput.fill(firstName);

    await this.lastNameInput.fill(lastName);

    await this.saveButton.click();
  }

  async verifyEmployeeCreated() {

  await this.page.waitForTimeout(3000);

  console.log(
    'Current URL:',
    await this.page.url()
  );

  const errors =
    await this.page
      .locator('.oxd-input-field-error')
      .allTextContents();

  console.log(
    'Validation Errors:',
    errors
  );

}
}