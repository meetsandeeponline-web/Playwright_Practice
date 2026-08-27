import {test,expect} from "@playwright/test"

test("calendar selection of future date" , async({page})=>{

    //Launch the browser
    await page.goto("https://demo.automationtesting.in/Datepicker.html")

    //Click calendar
    await page.locator("//input[@id='datepicker1']").click()

    await page.waitForTimeout(5000)

    


})