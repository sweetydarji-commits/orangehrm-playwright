export class DashboardPage {

  constructor(page) {
    this.page = page;

    this.dashboardTitle =
      page.locator('h6');
  }

  async verifyDashboardVisible() {
    await this.dashboardTitle.waitFor();
  }

  async getDashboardTitle() {
    return await this.dashboardTitle.textContent();
  }
}