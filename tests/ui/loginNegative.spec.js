import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Negative Login Tests', () => {

  test('@regression Invalid Username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'wrongUser',
      'admin123'
    );

    await expect(
      page.getByText('Invalid credentials')
    ).toBeVisible();
  });

  test('@regression Invalid Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'Admin',
      'wrongPass'
    );

    await expect(
      page.getByText('Invalid credentials')
    ).toBeVisible();
  });

  test('@regression Empty Credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
      page.getByText('Required').first()
    ).toBeVisible();
  });

});