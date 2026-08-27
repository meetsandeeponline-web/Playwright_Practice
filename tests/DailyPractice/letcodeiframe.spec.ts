import{test,expect}from "@playwright/test"

test("IFrame test",async({page})=>{

    //Launch the URL
    await page.goto("https://letcode.in/frame")

    //Locate the frame
    const parentFrame = page.frameLocator("#firstFr");

    //Locate the Fname
    const fName=parentFrame.locator("//input[@name='fname']")
    await fName.fill("Test786");
    await page.waitForTimeout(6000)

    //Locate the Lname

    const lName=parentFrame.locator("//input[@name='lname']")
    await lName.fill("user")
   
    //Locate the Email
    const emailParent=parentFrame.frameLocator("//iframe[@title='Inner Frame']")
    emailParent.getByRole('textbox',{name:'Enter email'}).fill("test@786.com")
    await page.waitForTimeout(6000)
})