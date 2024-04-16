const ModelBase = require('./ModelBase');
const Shop = require('./Shop'); 

class ShopCategory extends ModelBase 
{
    constructor() 
    {
        super(); 

        this.shopCategoryID = null; 
        this.shopCategoryTitle = ''; 
        this.shopCategoryDescription = ''; 
        this.shopFk = []; // should be defined as a list of Shop class
    }
}

module.exports = ShopCategory;
