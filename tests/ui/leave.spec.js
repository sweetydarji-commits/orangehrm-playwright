import { test, expect }
from '../../fixtures/customFixture.js';

test('@smoke Apply Leave', async ({
  loginPage,
  leavePage
}) => {

  await loginPage.navigate();

  await loginPage.login(
    process.env.DEMO_USERNAME,
    process.env.PASSWORD
  );

  await leavePage.openLeaveModule();

  await leavePage.applyLeave();

  await leavePage.verifyLeaveApplied();
});