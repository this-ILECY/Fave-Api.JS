const ModelBase = require('./ModelBase');
const CustomerAddress = require('./CustomerAddress');
const User = require('./User');

class Customer extends ModelBase 
{
    constructor() 
    {
        super(); 

        this.customerID = null; 
        this.userID = null; 
        this.customerFirstName = ''; 
        this.customerLastName = ''; 
        this.telephone = ''; 
        this.cellPhone = ''; 
        this.email = ''; 
        this.isActive = false; 
        this.custAdresFk = []; // should be defined as a list of CustomerAddress
        this.userFk = new User(); 
    }
}

module.exports = Customer;
