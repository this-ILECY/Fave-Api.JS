import { Column,PrimaryGeneratedColumn,OneToOne } from 'typeorm';
import { ModelBase } from './ModelBase';
import { Customer } from './Customer';

export class CustomerAddress extends ModelBase 
{
        @PrimaryGeneratedColumn()
        CustomerAddressID;

        @Column()
        CustomerID;

        @Column() 
        AddressTitle;
        
        @Column()
        CustomerLatitude;
        
        @Column()
        CustomerLongitude;

        @OneToOne(() => Customer, customer, customer.CustomerID)
        CustomerFk;
}