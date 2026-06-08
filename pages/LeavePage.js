import { expect } from '@playwright/test';

export class LeavePage {
  constructor(page) {
    this.page = page;

    // Main Menu
    this.leaveMenu = page.getByRole('link', {
      name: 'Leave'
    });

    // Apply submenu
    this.applyMenu = page.getByRole('link', {
      name: 'Apply'
    });

    // Apply Leave page elements
    this.leaveTypeDropdown = page.locator('.oxd-select-text').first();

    this.leaveOptions = page.locator('.oxd-select-option');

    this.commentBox = page.locator('textarea');

    this.applyButton = page.getByRole('button', {
      name: 'Apply'
    });

    this.successToast = page.locator('.oxd-toast');
  }

  async openLeaveModule() {
    await this.leaveMenu.click();

    await this.applyMenu.click();

    await expect(this.page).toHaveURL(
      /applyLeave/,
      { timeout: 30000 }
    );

    await expect(this.leaveTypeDropdown).toBeVisible({
      timeout: 30000
    });
  }

  async applyLeave() {
  await this.leaveTypeDropdown.click();

  await this.leaveOptions.first().click();

  await this.commentBox.fill(
    'Applying leave through automation'
  );

  await this.applyButton.click();
}

async verifyLeaveApplied() {
  await this.page.waitForTimeout(3000);

  const errors = await this.page
    .locator('.oxd-input-field-error')
    .allTextContents();

  console.log('Validation Errors:', errors);

  console.log('Current URL:', await this.page.url());
}
}