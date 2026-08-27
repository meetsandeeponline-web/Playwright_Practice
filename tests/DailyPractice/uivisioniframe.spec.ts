import {test,expect} from "@playwright/test"

test("Google form iframe",async({page})=>{

    //Launch the webpage
await page.goto("https://ui.vision/demo/iframes")
await page.waitForLoadState("load")

//locate the parent frame
const parentFrame=page.frameLocator("//iframe[contains(@src,'docs.google.com/forms')]")
await page.waitForTimeout(5000)
//Locate the radio button using parent frame
const radio= parentFrame.getByRole("radio",{name:'I am a human'})
await radio.check();

//Locate the checkbox using parent frame
const checkbox=parentFrame.getByRole("checkbox",{name:'Web Testing'})
await checkbox.click()
await page.waitForTimeout(5000)

//Locate the list box
const lstbox=parentFrame.getByRole("option",{name:'Did you know that the IDE has a LOOP button?'})
lstbox.getByRole("option",{name:'Well, now I know :-)'}).click()
await page.waitForTimeout(5000)


//click Next button

await page.getByRole("button",{name:'Next'}).click()

await page.waitForTimeout(5000)

})