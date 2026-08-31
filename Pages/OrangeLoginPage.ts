//Define Variables
//Constructor ( Locators)
//Action Methods

import { Page, Locator } from "@playwright/test"


export class OrangeLoginPage {

    readonly page: Page
    readonly userName: Locator
    readonly password: Locator
    readonly loginButton: Locator
    readonly invalidCredentialsMessage:Locator

    //Find the locators

    constructor(page: Page) {

        this.page = page;
        this.userName = page.getByRole('textbox', { name: 'Username' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })

        this.invalidCredentialsMessage = page.getByText("Invalid credentials")
    }

    //Action method


    async entervalidCredentials(username:string,password:string) {

        await this.page.goto("/")
        //Fill the user name
        await this.userName.fill(username)
        //Fill the password
        await this.password.fill(password)
        //Fill the login button
        await this.loginButton.click()

    }

}
