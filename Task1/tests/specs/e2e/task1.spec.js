import { test, expect } from '../../fixtures/fixtures'
// import HomePage from '../../pageObjects/pages/home.page';

test.describe('Main menu tests', () => {

    test.skip('Sort prices by price range', async( { homePage } ) =>{

    })


    test.skip('Filter by category', async( { homePage } ) => {
        // filter by category 'hammer' and expec
        let apiProducts = [];
        homePage.on('response', async (response) => {
        if (response.url().includes('/products') && response.status() === 200) {
            const json = await response.json();
            apiProducts = json.data ?? json;
        }
        })
    })


})
test.describe('Product window', () => {

    test.skip('Confirm you cannot add to cart because item is out of stock', async( {homePage, productPage} ) =>{
        await homePage.clickProduc
        
    })

    test('Succesful adding an item to favourites, when logged in', async( {homePage, productPage} ) => {
        await homePage.clickProduc(0);

        await productPage.addToFavoritesButton()

        await(expect(productPage.components.favorites).toHaveAttribute('aria-pressed', 'true'))

    })
})