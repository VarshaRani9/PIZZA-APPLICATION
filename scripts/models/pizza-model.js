// data modelling
class Pizza{
    constructor(id, name, price, url, desc){
        // this - current calling obhect ref.
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.desc = desc;
        this.isAddedInCart = false;
    }
}
export default Pizza;