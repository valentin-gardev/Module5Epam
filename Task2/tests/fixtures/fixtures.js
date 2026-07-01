import { test as base } from '@playwright/test'

export const test = base.extend({

    cartPageItem: async ({ page }, use) => {
        // await page.goto('https://www.saucedemo.com/')
        // await page.locator('[data-test="username"]').fill('standard_user')
        // await page.locator('[data-test="password"]').fill('secret_sauce')
        // await page.locator('[data-test="login-button"]').click()
        // await page.waitForURL('**/inventory**')// await for the url

        await page.goto('/inventory.html')
        await page.locator('.btn_inventory').nth(0).click()
        await page.locator('[data-test="shopping-cart-link"]').click()
        await page.waitForURL('**/cart**')

        await use(page)
    },

    cartPage: async ({ page }, use) => {
        // await page.goto('https://www.saucedemo.com/')
        // await page.locator('[data-test="username"]').fill('standard_user')
        // await page.locator('[data-test="password"]').fill('secret_sauce')
        // await page.locator('[data-test="login-button"]').click()
        await page.goto('/inventory.html')
        await page.locator('[data-test="shopping-cart-link"]').click()
        await page.waitForURL('**/cart**')

        await use(page)

    },

    loginPage: async({ browser }, use) => {

        const context = await browser.newContext({ storageState: undefined})
        const page = await context.newPage();
        await page.goto('https://www.saucedemo.com/')

        await use(page)

        await context.close();
    },

    homePage: async({ page }, use) => {
        await page.goto('/inventory.html')

        await use(page)
    }
})


export { expect } from '@playwright/test'