import { test } from '../../fixtures/customFixture.js';

test(
  '@smoke Update Personal Details',
  async ({
    loginPage,
    myInfoPage
  }) => {

    await loginPage.navigate();

    await loginPage.login(
      process.env.DEMO_USERNAME,
      process.env.PASSWORD
    );

    await myInfoPage.openMyInfo();

    await myInfoPage.updatePersonalDetails(
      'Orange',
      'QA'
    );

    await myInfoPage.verifyUpdateSuccess();

  }
);