import { test, expect } from "@playwright/test"

test("Launch and create account", async ({ page }) => {

  await page.goto("https://www.way2automation.com/automationpracticesite1.html")
  //await page.locator("(//a['Signup'])[position()=4]").click();
  //await page.getByRole('link',{name:"Signup"}).click({force:true});
  await page.locator("(//a['Signup'])[position()=4]").click();
  await expect (page.getByRole('heading',{name:"Create New Account"})).toBeVisible()
  await page.locator("//input[@id='reg-name']").fill("Testuser786")
  await page.locator("//input[@id='reg-email']").fill("Testuser786@gmail.com")
  await page.locator("//input[@id='reg-password']").fill("secretpassword")
  await page.pause()
  await page.getByRole('button',{name:"Create Account"}).click()

})

test("Launch and Login",async({page})=>{

await page.goto("https://www.way2automation.com/automationpracticesite1.html")
await page.locator("(//a['Login'])[position()=5]").click()
await expect(page.getByRole('heading',{name:("Login to your account")})).toBeVisible()
await page.locator("//input[@id='login-username']").fill('admin')
await page.locator("//input[@id='login-password']").fill("admin")
await page.getByRole('button',{name:"Login"}).click()
await page.pause()


})