export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(baseUrl) {
    await this.page.goto(baseUrl);
  }
}
