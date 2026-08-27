import {test,expect} from "@playwright/test"

test("redbus calendar control" , async({page})=>{

    //Launch redbus browser

   await page.goto("https://www.redbus.in/")

    //click calendar control

    await page.getByRole("dialog",{name:'Select date of journey'}).click()

    await page.waitForTimeout(7000)






})