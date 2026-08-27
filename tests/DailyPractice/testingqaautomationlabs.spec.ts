import {test,expect} from "@playwright/test"

//Launch the webpage
test("Launch the page", async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/");
    // Check for the page URL to be https://testing.qaautomationlabs.com/
    await expect(page).toHaveURL("https://testing.qaautomationlabs.com/");
    //Locate the drop down
    await page.getByRole('heading',{name:'Dropdown'}).click();
    
    //Select a option from dropdown (Orange)
    //test("Select a value from Single Select Option",async({page})=>{
        await page.getByRole("combobox",{name:'Select a fruit'}).selectOption('Orange')
    
        //Assert Orange is selected from dropdown

        await expect(page.getByRole("combobox",{name:'Select a fruit'})).toHaveValue('Orange')

        //Assert the confirmation message shows "You selected: Orange"

        const fruitResult=page.getByTestId('dropdown-fruit-result')
        await expect(fruitResult).toContainText('You selected:')
        
        //Print to console what it selected
        const rsText=await fruitResult.textContent();
        console.log("Result Message:",rsText)

    })

