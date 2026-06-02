import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AddUserPage } from '../../pages/AddUserPage';

test('@smoke Add New User', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const addUser = new AddUserPage(page);

  await loginPage.navigate();

  await loginPage.login(
    process.env.DemoUSERNAME,
    process.env.PASSWORD
  );

  await addUser.openAddUserForm();

  await addUser.fillUserForm(
    'testuser123',
    'Password@123'
  );

  await expect(page).toHaveURL(/admin/);
});