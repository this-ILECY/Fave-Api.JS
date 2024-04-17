import { Column,PrimaryGeneratedColumn,OneToMany,OneToOne } from 'typeorm';
import { ModelBase } from './ModelBase';
import { CustomerAddress } from './CustomerAddress';
import { User } from './User';

export class Customer extends ModelBase 
{
        @PrimaryGeneratedColumn()
        CustomerID;
        
        @Column()
        UserID; 

        @Column()
        CustomerFirstName; 

        @Column()
        CustomerLastName;

        @Column()
        Telephone; 

        @Column()
        CellPhone; 

        @Column()
        Email; 

        @Column()
        IsActive; 

        @OneToMany(()=> CustomerAddress, CustAddressFk => CustAddressFk.CustomerAddressID)
        CustAddressFk;
        
        @OneToOne(() => User, UserFk => UserFk.UserID)
        UserFk; 
}
