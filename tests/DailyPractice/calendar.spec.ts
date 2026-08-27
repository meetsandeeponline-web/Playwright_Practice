import { test, expect } from "@playwright/test"

test("select date", async ({ page }) => {

    //browse to the page
    await page.goto("https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html")

    //Approch 1: Enter date in the calendar control

    await page.locator("//input[@id='datepicker']").fill("08/05/2026")
    await expect(page.locator("//input[@id='datepicker']")).toHaveValue("08/05/2026")
    await page.pause()
})
//Approch 2 

test.only("Calendar traverse to given date", async ({ page }) => {

    const expectedyear="2027"
    const expectedMonth="January"
    const expecteddate="20"
    //browse to the page
    await page.goto("https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html")

    //Approch 1: Enter date in the calendar control

    await page.locator("//input[@id='datepicker']").click()

    // Find the current month

    let currMonth=await page.locator(".ui-datepicker-month").innerText()

    //Find current year
    console.log(currMonth)
    let currYear=await page.locator(".ui-datepicker-year").innerText()
    console.log(currYear)
    while(currMonth!==expectedMonth || currYear!==expectedyear)
    {   
        //await page.getByRole('link',{name:'Next'}).click()

        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()

        currMonth=await page.locator(".ui-datepicker-month").innerText()

        currYear=await page.locator(".ui-datepicker-year").innerText()

    }
        //capturing date value
        let xpath='//td[@data-handler="selectDay"]/a[text()="'+expecteddate+'"]'

        //click on date value
        await page.locator(xpath).click()
        await page.waitForTimeout(5000)


})
