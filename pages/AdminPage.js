import { expect } from '@playwright/test';

export class AdminPage {

  constructor(page) {

    this.page = page;

   this.adminMenu = page.getByRole('link', {  name: 'Admin' });

    this.usernameSearch = page.locator( '(//input[contains(@class,"oxd-input")])[2]' );

    this.searchButton =
      page.locator('button[type="submit"]');

    this.resultTable =
      page.locator('.oxd-table-body');
  }

  async openAdminPage() {

  await this.adminMenu.click();

  await this.page.waitForURL(/admin/);

}
  async searchUser(username) {

  await this.usernameSearch.fill(username);

  await this.searchButton.click();

  await this.page.waitForLoadState(
    'networkidle'
  );

}

  async verifyResultsVisible() {

  await this.page.waitForLoadState(
    'networkidle'
  );

  await expect(
    this.resultTable
  ).toBeVisible({
    timeout: 30000
  });

}
}