import { test, expect } from '../../fixtures/customFixture.js';
import { LoginPage } from '../../pages/LoginPage.js';
import { AddUserPage } from '../../pages/AddUserPage.js';
import { generateUser } from '../../utils/dataGenerator.js';

test('@smoke Add New User', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const addUser = new AddUserPage(page);

  const user = generateUser();

  await loginPage.navigate();

  await loginPage.login(
    process.env.DEMO_USERNAME,
    process.env.PASSWORD
  );

  // IMPORTANT: wait for dashboard
  await page.waitForURL('**/dashboard/**');

  await addUser.openAddUserForm();

  await addUser.fillUserForm(
    user.username,
    user.password
  );

  console.log('Created User:', user.username);

  await expect(page).toHaveURL(/admin/);
});