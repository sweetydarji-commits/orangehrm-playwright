import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { LeavePage } from '../pages/LeavePage.js';
import { MyInfoPage } from '../pages/MyInfoPage.js';
import { AdminPage } from '../pages/AdminPage.js';
import { AddUserPage } from '../pages/AddUserPage.js';
import { PIMPage } from '../pages/PIMPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

export const test = base.extend({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  leavePage: async ({ page }, use) => {
    await use(new LeavePage(page));
  },

  myInfoPage: async ({ page }, use) => {
    await use(new MyInfoPage(page));
  },

  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },

  addUserPage: async ({ page }, use) => {
    await use(new AddUserPage(page));
  },

  pimPage: async ({ page }, use) => {
    await use(new PIMPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  }

});

export { expect };