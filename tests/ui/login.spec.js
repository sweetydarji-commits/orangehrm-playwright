import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('@smoke Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    process.env.DemoUSERNAME,
    process.env.PASSWORD
  );

  await expect(page).toHaveURL(/dashboard/);
});