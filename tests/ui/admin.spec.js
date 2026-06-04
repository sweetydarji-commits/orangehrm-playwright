import {test,expect} from '../../fixtures/customFixture.js';

import { loginAsAdmin } from '../../utils/testSetup.js';

import { AdminPage } from '../../pages/AdminPage.js';

import { adminData } from '../../test-data/adminData.js';

test.describe('Admin Module', () => {

  test('@smoke Search Existing User',
    async ({ page }) => {

      await loginAsAdmin(page);

      const adminPage =
        new AdminPage(page);

      await adminPage.openAdminPage();

      await adminPage.searchUser(
        adminData.username
      );

      await adminPage.verifyResultsVisible();

  });

});