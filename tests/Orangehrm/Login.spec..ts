import { test as setup } from "@playwright/test";

setup("Login", async ({ page }) => {

    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

   // await page.locator("//input[@name='username']").fill("Admin");
   // await page.getByRole("button",{name:'Username'}).fill("Admin");
   await page.waitForLoadState("load")
   await page.getByPlaceholder("Username").fill("Admin");
    await page.locator("//input[@type='password']").fill("admin123");

    await page.locator("//button[@type='submit']").click()

    await page.waitForTimeout(5000);

    console.log("Login completed");

    await page.context().storageState({
        path: "auth.json"
    });

    console.log("auth.json created");

});

("admin step here")