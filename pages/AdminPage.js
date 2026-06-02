import { expect } from '@playwright/test';

export class AdminPage {

  constructor(page) {

    this.page = page;

    this.adminMenu =
      page.locator('//span[text()="Admin"]');

    this.usernameSearch =
      page.locator(
        '(//input[contains(@class,"oxd-input")])[2]'
      );

    this.searchButton =
      page.locator('button[type="submit"]');

    this.resultTable =
      page.locator('.oxd-table-body');
  }

  async openAdminPage() {

    await this.adminMenu.click();
  }

  async searchUser(username) {

    await this.usernameSearch.fill(username);

    await this.searchButton.click();
  }

  async verifyResultsVisible() {

    await expect(
      this.resultTable
    ).toBeVisible();
  }
}