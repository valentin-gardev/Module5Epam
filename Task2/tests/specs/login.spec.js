import { test, expect } from '../fixtures/fixtures';


test('Succesful login with correct username and password', async({ loginPage }) => {
    await loginPage.locator('[data-test="username"]').fill('standard_user')
    await loginPage.locator('[data-test="password"]').fill('secret_sauce')
    await loginPage.locator('[data-test="login-button"]').click()
    await expect(loginPage.locator('[data-test="inventory-list"]')).toBeVisible()

})

test('Username and password do not match error message', async({ loginPage }) => {
    await loginPage.locator('[data-test="username"]').fill('standard_user')
    await loginPage.locator('[data-test="password"]').fill('secretsauce')
    await loginPage.locator('[data-test="login-button"]').click()
    await expect(loginPage.locator('[data-test="error"]')).toBeVisible()
    
})

test('Username required message', async({ loginPage }) => {
    
    await loginPage.locator('[data-test="password"]').fill('secretsauce')
    await loginPage.locator('[data-test="login-button"]').click()
    await expect(loginPage.locator('[data-test="error-button"]')).toBeVisible()
    
})