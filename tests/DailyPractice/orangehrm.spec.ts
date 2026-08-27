import { test, expect } from "@playwright/test"

test.describe("Orange HRM Test", () => {

    test.beforeEach("Launch and Login", async ({ page }) => {
        //Launch Orange HRM
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //Login to username / password

        await page.getByPlaceholder("Username").fill("Admin")

        await page.getByPlaceholder("Password").fill("admin123")

        await page.locator("//button[@type='submit']").click()

        await page.waitForLoadState("load")

    })
        // Click on admin side panel
    test("Click Admin module", async ({ page }) => {

        await page.locator('//*[@id="app"]//aside/nav/div[2]/ul/li[1]/a/span').click()
        await expect(page.getByRole('heading', { name: 'Admin' }).isVisible())
    
    })

    // Runs After Every test
    test.afterEach(async ({ page }) => {

        // Click user profile
        await page.locator('//*[@id="app"]//div[3]/ul/li/span/i').click();

        // Click Logout
        await page.getByRole("menuitem", { name: 'Logout' }).click();

        console.log("Logged out");
    });



});


