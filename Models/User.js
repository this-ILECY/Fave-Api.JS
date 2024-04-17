import { IdentityUser } from 'typeorm';
import { Customer } from  './Customer';
import { Shop } from './Shop';

export class User extends IdentityUser 
{
        userCreatedDate = new Date().toISOString(); 
        isActive = false; 
        isDeleted = false; 
        customerFk = new Customer(); 
        shopFk = new Shop(); 
}