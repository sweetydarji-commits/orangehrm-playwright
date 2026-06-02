import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Negative Login Tests', () => {

  test('@regression Invalid Username', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'wronguser',
      process.env.PASSWORD
    );

    await loginPage.verifyInvalidLogin();
  });

  test('@regression Invalid Password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      process.env.DemoUSERNAME,
      'wrongpass'
    );

    await loginPage.verifyInvalidLogin();
  });

});