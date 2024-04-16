const ModelBase = require('./ModelBase');
const User = require('./User'); 
const Product = require('./Product'); 
const ShopCategory = require('./ShopCategory'); 

class Shop extends ModelBase 
{
    constructor() 
    {
        super(); 
        
        this.shopID = null; 
        this.userID = null; 
        this.shopCategoryID = null; 
        this.shopName = ''; 
        this.shopAddress = ''; 
        this.shopBanner = ''; 
        this.shopAvatar = ''; 
        this.telePhone = ''; 
        this.cellPhone = ''; 
        this.shopLatitude = 0.0; 
        this.shopLongitude = 0.0; 
        this.isActive = false;         
        this.userFk = new User(); 
        this.productFk = []; // should be defined as a list of Product class
        this.shopCategoryFk = new ShopCategory(); 
    }
}

module.exports = Shop;
