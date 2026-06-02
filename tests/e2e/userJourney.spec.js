import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AddUserPage } from '../../pages/AddUserPage';

test('Complete User Journey', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const addUser = new AddUserPage(page);

  await loginPage.navigate();

  await loginPage.login(
  process.env.DemoUSERNAME,
  process.env.PASSWORD
);

console.log('USERNAME:', process.env.DemoUSERNAME);
console.log('PASSWORD:', process.env.PASSWORD);
  await addUser.openAddUserForm();

  await addUser.fillUserForm(
    'user123',
    'Password@123'
  );

  await expect(page).toHaveURL(/admin/);
});