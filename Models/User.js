//const { IdentityUser } = require('TypeORM');
const Customer = require('./Customer');
const Shop = require('./Shop');

class User extends IdentityUser 
{
    constructor() 
    {
        super(); 

        this.userCreatedDate = new Date().toISOString(); 
        this.isActive = false; 
        this.isDeleted = false; 
        this.customerFk = new Customer(); 
        this.shopFk = new Shop(); 
    }
}

module.exports = User;
