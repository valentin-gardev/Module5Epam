const { test: setup, expect } = require('@playwright/test')
const path = require('path');

const STATE_PATH = path.join(__dirname, 'state.json');

setup.describe('Auth Setup', () => {

    setup('Should login and save storage state', async({ page }) => {
        await page.goto('https://www.saucedemo.com/')

        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()

        await expect(page).toHaveURL(/.*inventory/)

        await page.context().storageState({ path: STATE_PATH})

    })
})