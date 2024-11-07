import { BasePage } from "./BasePage";
import { allure } from "allure-playwright";
import { expect } from "@playwright/test";

export class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = this.page.getByPlaceholder("Что вы ищете?");
    this.closeSearchResultsIcon = this.page.locator(".popup__close");
    this.searchResults = this.page.locator(".search__result");
  }

  async enterSearchQuery(text) {
    await allure.step(`Enter search query: "${text}"`, async () => {
      await this.searchInput.fill(text);
    });
  }

  async closeSearchPopup() {
    await allure.step("Close search popup", async () => {
      await this.closeSearchResultsIcon.click();
    });
  }

  async verifySearchResults(text) {
    await allure.step(`Verify search results contain "${text}"`, async () => {
      await expect(this.searchResults).toContainText(text);
    });
  }
}
