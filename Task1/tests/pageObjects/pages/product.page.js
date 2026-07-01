import ProductComponents from "../components/product.components";

export default class ProductPage {
    constructor(page){
        this.page = page
        this.components = new ProductComponents(page)
    }
    
    async addToCartButton() {
        await this.components.addToCart.click()
    }
    
    async addToFavoritesButton() {
        await this.components.favorites.click()
    }

    async compareButton() {
        await this.components.compare.click()

    }


}