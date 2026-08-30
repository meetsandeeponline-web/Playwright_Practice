import { test, expect } from "@playwright/test"
import { OrangeLoginPage } from "../Pages/OrangeLoginPage"
import { loginData } from "../test_data/loginData"

for (const data of loginData) {

    test(`Login Multiusertest '${data.username}'`, async ({ page }) => {

        const orangeLoginPage = new OrangeLoginPage(page)


        await orangeLoginPage.entervalidCredentials(data.username, data.password)

        if (data.expectedResult === 'success') {

            await expect(page).toHaveURL(/dashboard/)
        }else {

            await expect(
                page.getByText("Invalid credentials")
            ).toBeVisible()

        }


    })


}
