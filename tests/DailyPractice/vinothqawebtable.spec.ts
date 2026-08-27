import { test, expect } from "@playwright/test"
test("webtable tets", async ({ page }) => {

    //Browse to webpage
    await page.goto("https://vinothqaacademy.com/webtable/")
    //Locate the header
    const header = await page.locator("//table[@id='myTable']/thead").allInnerTexts()
    console.log(header.join("\t"))
    //Find number of rows
    const rowCount = await page.locator("//table[@id='myTable']/tbody/tr")

    const rowsCount = await rowCount.count()

    console.log("Total Rows: " + rowsCount)
    //Loop thr the rows
    for (let i = 0; i < rowsCount; i++) {

        let rowData = await rowCount.nth(i).allInnerTexts()
        console.log(rowData.join("\t"))
    }


})
