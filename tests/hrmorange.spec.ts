import { test, expect } from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { PIMAddEmployee } from "../Pages/PIMAddEmployee"
import { loginData } from "../test_data/loginData"

for(const data of loginData){

test(`Login to Orange HRM with multiple logins '${data.username}'`, async ({ page }) => {

    //object created 
    const loginPage = new LoginPage(page)
    const pimaddnewEmp=new PIMAddEmployee(page)

    //call the Login Page- Because of constructor implemeantion only we can get it here
    await loginPage.navigatetoLoginPage(data.username,data.password)

   // await pimaddnewEmp.clickPIMModuleAddEmployee()

})
}