import { MainPage } from "./MainPage";
import { SearchPage } from "./SearchPage";

export class App {
  constructor(page) {
    this.page = page;
    this.mainPage = new MainPage(page);
    this.searchPage = new SearchPage(page);
  }
}
