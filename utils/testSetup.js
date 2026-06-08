import { LoginPage } from '../pages/LoginPage.js';
import { users } from '../test-data/users.js';

export async function loginAsAdmin(page) {

  const loginPage =
    new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    users.admin.username,
    users.admin.password
  );

  await page.waitForURL(
    /dashboard/,
    {
      timeout: 60000
    }
  );
}