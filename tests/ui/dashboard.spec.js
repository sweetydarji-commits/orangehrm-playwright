import { test, expect }
from '../../fixtures/customFixture.js';

import { loginAsAdmin }
from '../../utils/testSetup.js';

test(
  'Verify Dashboard Page',
  async ({
    page,
    dashboardPage
  }) => {

    await loginAsAdmin(page);

    await dashboardPage
      .verifyDashboardVisible();

    await expect(
      dashboardPage.dashboardTitle
    ).toHaveText('Dashboard');

});