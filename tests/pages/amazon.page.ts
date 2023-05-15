import { expect, Locator, Page } from "@playwright/test";

export class AmazonPage {
  readonly page: Page;

  // Selectors
  searchInput: Locator;
  addToCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder("Search Amazon");
    this.addToCartBtn = page.getByRole("button", {
      name: "Add to Cart",
    });
  }

  async goto(urlParam?: string) {
    await this.page.goto(`/${urlParam}`);
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchInput.press("Enter");
  }

  async clickOnResult(productName: string) {
    await this.page.getByRole("link", { name: productName }).first().click();
  }

  async addToCart() {
    await this.addToCartBtn.click();
    await expect(
      this.page
        .locator("#NATC_SMART_WAGON_CONF_MSG_SUCCESS")
        .getByText("Added to Cart")
    ).toBeVisible();
  }

  async compareSnapshot(fileName: string) {
    const maskLocator = this.page.locator(".a-begin").first(); // Mask elements that are subject to change

    expect(await this.page.screenshot({ mask: [maskLocator] })).toMatchSnapshot(
      `amazon-${fileName}.png`
    );
  }
}
