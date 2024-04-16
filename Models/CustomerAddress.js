const ModelBase = require('./ModelBase');
const Customer = require('./Customer');

class CustomerAddress extends ModelBase 
{
    constructor() 
    {
        super(); 

        this.customerAddressID = null;
        this.customerID = null; 
        this.addressTitle = ''; 
        this.customerLatitude = 0.0; 
        this.customerLongitude = 0.0;
        this.customerFk = new Customer(); 
    }
}

module.exports = CustomerAddress;
