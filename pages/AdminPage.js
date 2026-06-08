import { expect } from '@playwright/test';
import { AddUserPage } from './AddUserPage.js'
import { generateUser } from '../utils/dataGenerator.js';

export class AdminPage {

  constructor(page) {

    this.page = page;

   this.adminMenu = page.getByRole('link', {  name: 'Admin' });

    this.usernameSearch = page.locator( '(//input[contains(@class,"oxd-input")])[2]' );

    this.searchButton =
      page.locator('button[type="submit"]');

    this.resultTable =
      page.locator('.oxd-table-body');

    this.userRows =
  page.locator('.oxd-table-card');

this.deleteButton =
  page.locator('button i.bi-trash');

this.confirmDeleteButton =
  page.getByRole('button', {
    name: 'Yes, Delete'
  });

this.successToast =
  page.locator('.oxd-toast');
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

async deleteUser() {

  await this.userRows.first().waitFor({
    state: 'visible'
  });

  await this.deleteButton.first().click();

  await this.confirmDeleteButton.waitFor({
    state: 'visible'
  });

  await this.confirmDeleteButton.click();
}
async verifyDeleteSuccess() {

  await expect(
    this.successToast
  ).toBeVisible({
    timeout: 10000
  });

}
}