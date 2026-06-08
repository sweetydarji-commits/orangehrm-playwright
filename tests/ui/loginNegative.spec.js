import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';

test.describe('Negative Login Tests', () => {

  test('@regression Invalid Username', async ({
    page
  }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'wrongUser',
      process.env.PASSWORD
    );

    await expect(
      page.getByText('Invalid credentials')
    ).toBeVisible();

  });

  test('@regression Invalid Password', async ({
  page
}) => {

  const loginPage =
    new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    process.env.DEMO_USERNAME,
    'wrongPass'
  );

  await loginPage.verifyInvalidLogin();

});

});