import { test } from '../../fixtures/customFixture.js';
import { LoginPage } from '../../pages/LoginPage.js';
import { PIMPage } from '../../pages/PIMPage.js';


test('@smoke Add Employee',
async ({
  page,
  loginPage,
  pimPage
}) => {

  await loginPage.navigate();

  await loginPage.login(
    process.env.DEMO_USERNAME,
    process.env.PASSWORD
  );

  await page.waitForURL(
    /dashboard/,
    {
      timeout: 60000
    }
  );

  await pimPage.openPIMPage();

  await pimPage.clickAddEmployee();

  await pimPage.addEmployee(
    'Sweety',
    'Darji'
  );

  await pimPage.verifyEmployeeCreated();
});