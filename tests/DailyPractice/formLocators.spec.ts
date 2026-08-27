import { test, expect } from '@playwright/test';

test('Form Locators', async ({ page }) => {
    await page.goto('https://letcode.in/forms');
    await expect(page.getByRole('heading',{name:'Form'})).toBeVisible();
    
    await page.getByRole('textbox', { name: "First Name" }).fill("Sandeep");
    
    await page.getByRole('textbox', { name: "Last Name" }).fill("Kota");

    await page.getByRole('textbox',{name:"Email"}).fill("mail@example.com");

    await page.getByPlaceholder('Phone Number').fill('1234567890');

    await page.getByRole('textbox',{name:"Address Line-1"}).fill("Hyderabad");
    await page.pause();
    


    

    
   


})
