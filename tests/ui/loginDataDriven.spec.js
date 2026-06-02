import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { loginData } from '../../test-data/loginData';

loginData.forEach((data) => {

  test(data.testName, async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      data.username,
      data.password
    );

    if (data.expected === 'success') {

      await page.waitForURL('**/dashboard/**');
      await expect(page).toHaveURL(/dashboard/);

    } else {

      await expect(
        page.getByText('Invalid credentials')
      ).toBeVisible();

    }

  });

});