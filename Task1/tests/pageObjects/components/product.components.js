
export default class ProductComponents {
    constructor(page){
        this.page = page
        this.addToCart = page.locator('[data-test="add-to-cart"]')
        this.favorites = page.locator('[data-test="add-to-favorites"]')
        this.compare = page.locator('[data-test="add-to-compare"]')
        this.outOfStock = page.locator('[data-test="out-of-stock"]')
    }

    

}