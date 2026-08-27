import{test,expect, chromium} from "@playwright/test"

test("test without any fixture",async({})=>{

//launch the browser

const browser=await chromium.launch()

//add the context
const context1=await browser.newContext()

// Crreate a new page
const page1=await context1.newPage()
await page1.goto("https://amazon.in")

//get the cookies value using context
console.log(await context1.cookies())
await page1.pause()

//Create new context2

const context2=await browser.newContext()
//Create new page
const page2=await context2.newPage()
await page2.goto("https://flipkart.com")
console.log(await context2.cookies())

await page2.pause()

})