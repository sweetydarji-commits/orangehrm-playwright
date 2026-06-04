import {test,expect} from '../../fixtures/customFixture.js';

import { loginAsAdmin } from '../../utils/testSetup.js';

import { DashboardPage } from '../../pages/DashboardPage.js';

test('Verify Dashboard Page', async ({ page }) => {

  await loginAsAdmin(page);

  const dashboardPage =
    new DashboardPage(page);

  await dashboardPage.verifyDashboardVisible();

  await expect(
    dashboardPage.dashboardTitle
  ).toHaveText('Dashboard');
});