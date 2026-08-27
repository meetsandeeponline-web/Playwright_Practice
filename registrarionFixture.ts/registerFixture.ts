/*import { test as baseTest } from "@playwright/test"
//syntax to declare custom Fixture

type userData={

registerUser:any

}

export const test = baseTest.extend< userData>({

    registerUser: async ({ page }, use) => {

        //Launch the website

        await page.goto("https://parabank.parasoft.com/parabank/register.htm")
        //fill first name
        await page.locator("input[id='customer.firstName']").fill("Test")
        //fill last name
        await page.locator("input[id='customer.lastName']").fill("User")

        await use(page)

    }

})*/


//syntax
import { test as baseTest} from "@playwright/test"

const test=baseTest.extend<{ registerUser: any }>({

    registerUser: async ({ page }, use) => {



    }



})