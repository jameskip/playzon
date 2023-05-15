import { test } from "@playwright/test";
import { AmazonPage } from "./pages/amazon.page";

const productDetails = {
  searchTerm: "fish flip flops",
  productTitle:
    "Fish Flip Flops | The Original Fish Slippers | Funny Gift, Unisex Sandals, Bass Slides, Pool, Beach & Shower Shoes | Men, Women & Kids",
};

test("search product", async ({ page }) => {
  const amazon = new AmazonPage(page);

  await amazon.goto();
  await amazon.searchProduct(productDetails.searchTerm);
  await amazon.clickOnResult(productDetails.productTitle);

  await amazon.addToCart();

  await amazon.compareSnapshot("search-product");
});
