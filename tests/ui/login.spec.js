import { test, expect } from '../../fixtures/customFixture.js';

test('@smoke Valid Login', async ({ loginPage, page }) => {

  await loginPage.navigate();
console.log('Username:', process.env.DEMO_USERNAME);
console.log('Password:', process.env.PASSWORD);
  await loginPage.login(
    process.env.DEMO_USERNAME,
    process.env.PASSWORD
  );

const errorMsg = page.locator('.oxd-alert-content-text');

if (await errorMsg.isVisible()) {
  console.log('Error:', await errorMsg.textContent());
}

  await expect(page).toHaveURL(/dashboard/);
});