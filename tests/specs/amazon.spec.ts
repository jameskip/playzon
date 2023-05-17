import { Page, test } from "@playwright/test";
import { AmazonPage, IProductDetails } from "../pages/amazon.page";

const productDetails: IProductDetails = {
  asin: "B076BT4HP9",
  searchTerm: "zipchip",
  productTitle: "ZipChip – The New Way to Play (Neon Yellow)",
};

const searchAndAddToCart = async (
  page: Page,
  search: string,
  snapshotName: string
) => {
  const amazon = new AmazonPage(page);

  await amazon.goto();
  await amazon.searchProduct(search);
  await amazon.clickOnResult(productDetails.productTitle);

  await amazon.addToCart();

  await amazon.compareSnapshot(snapshotName);
};

test.describe("Amazon", async () => {
  test("should retrieve product by text", async ({ page }) => {
    await searchAndAddToCart(page, productDetails.searchTerm, "search-product");
  });

  test("should retrieve product by asin", async ({ page }) => {
    await searchAndAddToCart(page, productDetails.asin, "search-asin");
  });
});
