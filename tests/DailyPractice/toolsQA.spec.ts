import { test, expect } from "@playwright/test"

test("Locate form fields with CSS", async ({ page }) => {

    //Launch the URL
    await page.goto("https://demoqa.com/automation-practice-form")

    //Locate the Fname 

    await page.locator("#firstName").fill("TestUser")

    //Locare the Lname 

    await page.locator("#lastName").fill("QA")

    //Locare the email #userEmail
    await page.locator("#userEmail").fill("QA@automation.com")

    //Locate gender
    await page.locator("#gender-radio-1").click()

    //Fill mobile number

    await page.locator("#userNumber").fill("8938290323")

   

    //click Calendar

   /* await page.locator("#dateOfBirthInput").click()
    const expectedyear = "2027"
    const expectedMonth = "January"
    const expecteddate = "20"

    const currentMonthYear = await page.locator('.react-datepicker__current-month').textContent()
    console.log(currentMonthYear);

    while (currentMonthYear?.trim() !== `${expectedMonth} ${expectedyear}`) {
        await page.getByRole('button', { name: "Next Month" }).click()

    const expectedDay = page.locator(
        `.react-datepicker__day--${expecteddate.toString().padStart(3, "0")}:not(.react-datepicker__day--outside-month)`
    );

    }*/

     //Locate subjects

    await page.locator("#subjectsInput").fill("Chemistry")
    
    //Locate hobbies check box

    await page.locator("#hobbies-checkbox-2").check()

    //File upload

    const fileUpload=page.waitForEvent('filechooser')
    await page.locator("#uploadPicture").click()
    


 await page.waitForTimeout(7000)


})