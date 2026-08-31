import { test, expect } from "@playwright/test"

test('web table', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables#edit');

    const columnHeader = await page.locator("//table[@id='table1']/thead/tr/th")
    console.log("Column Headers Count " + await columnHeader.count())

    let columnHeaderCount = await columnHeader.count()

    for (let i = 0; i < columnHeaderCount; i++) {

        let columnHeaderText = await columnHeader.nth(i).innerText()
        console.log("Column Headers:" + columnHeaderText)

        // Get the rows data

        const tableRows = await page.locator("//table[@id='table1']/tbody/tr/td")
        const tablerowCount = await tableRows.count()
        console.log("Row values count is" + tablerowCount)

        for (let j = 0; j < tablerowCount; j++) {
            let rowValues=await tableRows.nth(j).innerText()
            console.log("Row Values:" + rowValues)


        }

    }

})

//Browse the url
//Locate the table header
//count the header values count 
//Print the header


test("Print row wise data", async ({ page }) => {
    //Browse the url
    await page.goto("https://the-internet.herokuapp.com/tables#edit");
    //get header value
    const tableHeader=await page.locator("//table[@id='table1']/thead/tr/th").allInnerTexts()
    
    console.log(tableHeader.join("\t"));
    //Locate rows
    const rows = page.locator("//table[@id='table1']/tbody/tr/td")

    let rowCount = await rows.count();

    console.log("Total Rows: " + rowCount);
    //Loop thr all rows and get row values in a single line

    for (let i = 0; i < rowCount; i++) {

        let rowData = await rows.nth(i).allInnerTexts()

        console.log(rowData.join("\t"));
    }
})

