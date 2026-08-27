import {test,expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { PIMAddEmployee} from "../Pages/PIMAddEmployee"

test("Add Employee from PIM", async({page})=>{
const loginPage = new LoginPage(page)
const addempFromPIM=new PIMAddEmployee(page)


await loginPage.navigatetoLoginPage()
await addempFromPIM.clickPIMModuleAddEmployee()

})