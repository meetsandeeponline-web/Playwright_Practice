import { Page, Locator } from "@playwright/test"

export class PIMAddEmployee {

    //variables
    readonly page: Page
    readonly clickPIMLink: Locator
    readonly addButton: Locator
    readonly empFirstName: Locator
    readonly empMiddleName: Locator
    readonly empLastName: Locator
    readonly saveButton: Locator;


    //Constructor -

    constructor(page: Page) {

        this.page = page;
        //this.PIMLink = page.locator('//*[@id="app"]//li[2]/a/span')
        this.clickPIMLink=page.getByText('PIM',{exact:true})
        this.addButton=page.getByRole('button',{name:' Add'})
        this.empFirstName = page.getByRole('textbox', { name: 'First Name' })
        this.empMiddleName = page.getByRole('textbox', { name: 'Middle Name' })
        this.empLastName = page.getByRole("textbox", { name: 'Last Name' })
        this.saveButton = page.getByRole('button', { name: 'Save' })

    }

    //Action Methods declaration

    async clickPIMModuleAddEmployee(){

        await this.clickPIMLink.click()
        await this.addButton.click()
        await this.empFirstName.fill('Sandeep')
        await this.empMiddleName.fill('Test')
        await this.empLastName.fill('User')
        await this.saveButton.click()

        await this.page.waitForTimeout(7000)

    }

}