import HomePageComponents from "../components/home.components";

export default class HomePage {

    constructor(page){
        this.page = page
        this.components = new HomePageComponents(page)
    }

    async open() {
        await this.page.goto('https://practicesoftwaretesting.com/')
    }
    
    async clickProduct(index) {
        await this.components.cardProducts.nth(index).click()
    }


}