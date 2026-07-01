import{ test as base } from '@playwright/test'
import HomePage from '../pageObjects/pages/home.page'

export const test = base.extend({

    homePage: async({ page }, use) => {
        const login = new HomePage(page)
        await login.open()
        await use(login)
    },

    productPage: async({ page }, use) => {
        const product = new ProductPage(page)
        await use(product)
    }

})





export { expect } from '@playwright/test'