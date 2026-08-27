import {test,expect} from "@playwright/test"


test("test autocomplete" , async({page})=>{
//Browse to the page
await page.goto("https://demo.automationtesting.in/AutoComplete.html")

//assert url
  await expect(page).toHaveURL(/AutoComplete\.html/);

//fill in the text
await page.locator('//input[@id="searchbox"]').fill('To')

//Check dropdown suggestions
await page.waitForSelector('//ul[@id="ui-id-1"]')

//counting list of items

const drpdownitems=await page.$$('//ul[@id="ui-id-1"]/li')

console.log(drpdownitems)

for(let i=0;i<drpdownitems.length;i++)
{
    const textdrpdwn:string|null=await drpdownitems[i].textContent()
    if(textdrpdwn.includes("Estonia"))
        {
        await drpdownitems[i].click()
        await page.pause()
        break;
    }

}

})