import{test,expect} from "@playwright/test"

test("test iframe approach 2",async({page})=>{

    // Launch the URL
await page.goto("https://vinothqaacademy.com/iframe/")

// Navigate to the iframe

const parentFrame=page.frameLocator("//iframe[@name='employeetable']")
//console.log(parentFrame)
await page.waitForTimeout(5000)
await parentFrame.locator("//input[@id='nameInput']").fill("Ram")
await page.waitForLoadState("load")
await parentFrame.getByPlaceholder('Role').fill("Senior QA")
await page.waitForTimeout(5000)

})