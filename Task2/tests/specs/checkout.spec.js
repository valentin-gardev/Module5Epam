import { test, expect } from '../fixtures/fixtures'


test.describe('Checkout tests', () => {

    
    test('Successfully ordering item', async({ cartPageItem }) => {

    await cartPageItem.locator('[data-test="checkout"]').click()
    await cartPageItem.locator('[data-test="firstName"]').fill('valentin')
    await cartPageItem.locator('[data-test="lastName"]').fill('gardev')
    await cartPageItem.locator('[data-test="postalCode"]').fill('1000')
    await cartPageItem.locator('[data-test="continue"]').click()
    await cartPageItem.locator('[data-test="finish"]').click()
    await expect(cartPageItem.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!')
})

test.only('Error message not filling required windows', async({ cartPageItem }) => {

    await cartPageItem.locator('[data-test="checkout"]').click()
    await cartPageItem.locator('[data-test="continue"]').click()
    await expect(cartPageItem.locator('[data-test="error"]')).toHaveText('Error: First Name is required')

})

test.skip('Removing an item updates ', async({ cartPageItem }) => {

    await expect(cartPageItem.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible()
    await cartPageItem.locator('[data-test="remove-sauce-labs-backpack"]').click()
    await expect(cartPageItem.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible()

})
})
