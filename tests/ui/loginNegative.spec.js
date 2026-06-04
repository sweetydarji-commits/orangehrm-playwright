import { test, expect } from '../../fixtures/customFixture.js';

test.describe('Negative Login Tests', () => {

  test('@regression Invalid Username', async ({ loginPage }) => {

    await loginPage.navigate();

await loginPage.login(
  'wronguser',
  'admin123'
);

    await loginPage.verifyInvalidLogin();
  });

  test('@regression Invalid Password', async ({ loginPage }) => {

    await loginPage.navigate();

    await loginPage.login(
  'Admin',
  'wrongpassword'
);
    await loginPage.verifyInvalidLogin();
  });

});