import { test, expect } from '../../fixtures/customFixture.js';
import { LoginPage } from '../../pages/LoginPage.js';
import { AddUserPage } from '../../pages/AddUserPage.js';
import { generateUser } from '../../utils/dataGenerator.js';

test('@smoke Add New User',
async ({
  page,
  loginPage,
  addUserPage
}) => {

  const user = generateUser();

  await loginPage.navigate();

  await loginPage.login(
    process.env.DEMO_USERNAME,
    process.env.PASSWORD
  );

  await page.waitForURL(
    '**/dashboard/**'
  );

  await addUserPage
    .openAddUserForm();

  await addUserPage
    .fillUserForm(
      user.username,
      user.password
    );

});