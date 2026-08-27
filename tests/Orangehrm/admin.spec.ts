import { test, expect } from "@playwright/test";

test("Click Admin module", async ({ page }) => {

    await page.goto("/web/index.php/dashboard/index");

    await page.locator('//*[@id="app"]//li[1]/a/span').click();

});