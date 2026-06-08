import { expect } from '@playwright/test';

export class MyInfoPage {

  constructor(page) {

    this.page = page;

    this.myInfoMenu =
      page.getByRole('link', {
        name: 'My Info'
      });

    this.firstName =
      page.locator('input[name="firstName"]');

    this.middleName =
      page.locator('input[name="middleName"]');

    this.lastName =
      page.locator('input[name="lastName"]');

    this.saveButton =
      page.locator('button[type="submit"]').first();

    this.toastMessage =
      page.locator('.oxd-toast');
  }

  async openMyInfo() {

    await this.myInfoMenu.click();

    await this.page.waitForURL(
      /viewPersonalDetails/
    );
  }

  async updatePersonalDetails(
    first,
    middle
  ) {

    await this.firstName.clear();
    await this.firstName.fill(first);

    await this.middleName.clear();
    await this.middleName.fill(middle);

    await this.saveButton.click();
  }

  async verifyUpdateSuccess() {

    await expect(
      this.toastMessage
    ).toBeVisible({
      timeout: 10000
    });

  }
}