import { BasePage } from "./BasePage";
const { allure } = require("allure-playwright");

export class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchButtonHeader = this.page
      .locator(".header-top__actions")
      .getByLabel("Поиск");
    this.searchInput = this.page.getByPlaceholder("Что вы ищете?");
  }

  async openSearchPopup() {
    await allure.step("Open search popup", async () => {
      await this.searchButtonHeader.click();
    });
  }
}
