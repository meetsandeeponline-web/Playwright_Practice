import {test,expect} from "@playwright/test"

test("Simple Dialog", async({page})=>{

    //Launch the URL
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Before clicking the alert set up dialog

    page.once('dialog',async(dialog)=>{

        console.log("the alert message is" , dialog.message())
        expect (dialog.message()).toContain("I am an alert box!")
        dialog.accept()
    })
    // Click the Simple alert button
    await page.getByRole('button',{name:'Simple Alert'}).click()
   
})

    // Confirmation Alert

     test("test confirmation alert",async({page})=>{
         await page.goto("https://testautomationpractice.blogspot.com/")
        //Before clickling alert set up dialog

        page.once('dialog', async(dialog)=>{
            console.log("the alert message is" , dialog.message())
            expect(dialog.message()).toContain('Press a button!')
            dialog.accept()

        })
        await page.getByRole('button',{name:'Confirmation Alert'}).click()
        await page.waitForTimeout(5000)

    })
    // test prompt alert
      test("test the prompt message",async({page})=>{

    //browse the URL

   await page.goto("https://testautomationpractice.blogspot.com/")

    //register for the alert msf

    page.once('dialog', async(dialog)=>{
        console.log("The alert message is " ,dialog.message())
        expect(dialog.message()).toContain("Please enter your name:") 
        await dialog.accept("Hello world")
        await page.pause()
    })

    await page.getByRole('button',{name:'Prompt Alert'}).click()
        await page.waitForTimeout(5000)


   })
       

  // test prompt box

  test("Prompt message box" , async({page})=>{
    //Launch URL
    page.waitForLoadState()
   await page.goto("https://testautomationpractice.blogspot.com/")

    //Register prompt msg alert

    page.once('dialog' , async(dialog)=>{
    
        console.log("The message is" , dialog.message())
        expect(dialog.message()).toContain("Please enter your name")
        await dialog.accept("hooyaa")
      
    })
       await page.getByRole('button',{name:'Prompt Alert'}).click()
      
  })