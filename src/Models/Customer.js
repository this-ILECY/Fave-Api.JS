import { Column,PrimaryGeneratedColumn,OneToMany,OneToOne,Entity } from 'typeorm';
import { ModelBase } from './ModelBase';
import { CustomerAddress } from './CustomerAddress';
import { User } from './User';

@Entity("Customer")
export class Customer extends ModelBase 
{
        @PrimaryGeneratedColumn({type: "bigint"})
        CustomerID;
        
        @Column({type: "bigint" , length: 30 })
        UserID; 

        @Column({type: "string" , length:30 })
        CustomerFirstName; 

        @Column({type: "string"})
        CustomerLastName;

        @Column({type: "string"})
        Telephone; 

        @Column({type: "string" , length: 50 })
        CellPhone; 

        @Column({type: "string"})
        Email; 

        @Column({type: "bool"})
        IsActive; 

        @OneToMany(()=> CustomerAddress, CustAddressFk => CustAddressFk.CustomerAddressID)
        CustAddressFk;
        
        @OneToOne(() => User, UserFk => UserFk.UserID)
        UserFk; 
}
