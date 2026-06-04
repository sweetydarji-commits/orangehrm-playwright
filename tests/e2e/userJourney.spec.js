import { test, expect } from '@playwright/test';

import { LoginPage }
from '../../pages/LoginPage.js';

import { AddUserPage }
from '../../pages/AddUserPage.js';

import { generateUser }
from '../../utils/dataGenerator.js';

test('Complete User Journey',
async ({ page }) => {

  const loginPage =
    new LoginPage(page);

  const addUser =
    new AddUserPage(page);

  await loginPage.navigate();

 await loginPage.login(
  process.env.DEMO_USERNAME,
  process.env.PASSWORD
);

await page.waitForURL(/dashboard/, {
  timeout: 60000
});

await page.goto(
  'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewAdminModule',
  {
    waitUntil: 'networkidle'
  }
);

const addButton = page.getByRole('button', {
  name: 'Add'
});

await addButton.waitFor({
  state: 'visible',
  timeout: 60000
});

await addButton.click();

  const user =
    generateUser();

  await addUser.fillUserForm(
    user.username,
    user.password
  );

  await expect(page)
    .toHaveURL(/admin/);

});