import { expect, test } from "@playwright/test";

test.describe("Basic Test", function () {
  test("Test 01", async function ({ page }) {
    await page.goto("/");
    await expect(page.getByText(/Playwright/).first()).toBeVisible();
    await page.locator("button[aria-label='Search']").click();
    await page.locator(".DocSearch-Input").fill("Parallel");
    await page.locator("#docsearch-item-0").click();
    await page
      .locator("#shard-tests-between-multiple-machines")
      .scrollIntoViewIfNeeded();
  });
});
