import { test as base } from "@playwright/test";
import { App } from "../pages/AppPage";

const baseUrl = "https://www.tretyakovgallery.ru/";

export const test = base.extend({
  app: async ({ page }, use) => {
    const app = new App(page);
    await app.mainPage.open(baseUrl);
    await use(app);
  },
});
