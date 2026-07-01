

export default class HomePageComponents{

    constructor(page){
        this.page = page
        this.cardProducts = page.locator('a.card')
    }

    filters(select) {
        const box = {
            handtools : '',
            hammer : '',
            handsaw : '',
            wrench : '',
            screwdriver : '',
            pliers : '',
            chisels : '',
            measures : ''
        };
    };

    slider(selected) {
        // this is max slider class "ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max", it changes to "active" when clicked
        // when active the value changes and it is "aria-valuetext" 
        const slider = {
            min : '.ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min',
            max : '.ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max'
        }
        return slider[selected]
    }

}