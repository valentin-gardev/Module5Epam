import { test, expect } from '../fixtures/fixtures';

test.describe('Cart tests', () => {
    
    test.use({storageState: 'state.json'})
    
    test.beforeEach(async ( { page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html')
    })
    
    test('Removing an item updates cart icon', async({ cartPageItem }) => {

    await expect(cartPageItem.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible()
    await cartPageItem.locator('[data-test="remove-sauce-labs-backpack"]').click()
    await expect(cartPageItem.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible()

})

test('Checkout button changes page to checkout page', async({ cartPage }) => {
    
    await cartPage.locator('[data-test="continue-shopping"]').click()
    await expect(cartPage).toHaveURL(/inventory\.html/)
    
})

test.skip('ContinueShopping button goes to products page', async({ loginPage }) => {
    
    await loginPage.locator('[data-test="password"]').fill('secretsauce')
    await loginPage.locator('[data-test="login-button"]').click()
    await expect(loginPage.locator('[data-test="error-button"]')).toBeVisible()
    
})})
