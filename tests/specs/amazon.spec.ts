import { test } from "@playwright/test";
import { AmazonPage } from "../pages/amazon.page";

const productDetails = {
  asin: "B076BT4HP9",
  searchTerm: "zipchip",
  productTitle: "ZipChip – The New Way to Play (Neon Yellow)",
};

test.describe("Amazon", async () => {
  test("should retrieve product by text", async ({ page }) => {
    const amazon = new AmazonPage(page);

    await amazon.goto();
    await amazon.searchProduct(productDetails.searchTerm);
    await amazon.clickOnResult(productDetails.productTitle);

    await amazon.addToCart();

    await amazon.compareSnapshot("search-product");
  });

  test("should retrieve product by asin", async ({ page }) => {
    const amazon = new AmazonPage(page);

    await amazon.goto();
    await amazon.searchProduct(productDetails.asin);
    await amazon.clickOnResult(productDetails.productTitle);

    await amazon.addToCart();

    await amazon.compareSnapshot("search-asin");
  });
});
