import { Page, Locator } from "@playwright/test"

//Page object class is a class

export class LoginPage {


    //locators wont change often hence readonly
    //Page as a global variable
    //we have Uname,pwd,Login button

    //Define Variables     

    readonly page: Page
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator

    //Constructor
    //we are passing a paramter to this constructor which is a page paramter
    //page comes from the acutal test
    //in the constructor we will assign locators to the variables.

    //this is representing class
    constructor(page: Page) {

        this.page = page

        this.userNameInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })


    }

    //Action methods

    async navigatetoLoginPage(username:string,password:string){

        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await this.page.waitForLoadState("load")
        //Enter username
        await this.userNameInput.fill(username)
        //Enter password
        await this.passwordInput.fill(password)
        //click Login button
        await this.loginButton.click()
        await this.page.waitForTimeout(5000)
    }


}