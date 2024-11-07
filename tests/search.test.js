import { test } from "../app/helpers/fixture";

test("Search functionality supports consecutive queries", async ({ app }) => {
  await app.mainPage.openSearchPopup();
  await app.searchPage.enterSearchQuery("Пушкин");
  await app.searchPage.verifySearchResults("Пушкин");
  await app.searchPage.closeSearchPopup();
  await app.mainPage.openSearchPopup();
  await app.searchPage.enterSearchQuery("Россия");
  await app.searchPage.verifySearchResults("Россия");
});
