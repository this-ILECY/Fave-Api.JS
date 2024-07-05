import { Column,PrimaryGeneratedColumn,OneToOne,Entity } from 'typeorm';
import { ModelBase } from './ModelBase';
import { Customer } from './Customer';

@Entity("CustomerAddress")
export class CustomerAddress extends ModelBase 
{
        @PrimaryGeneratedColumn({ type:"bigint" })
        CustomerAddressID;

        @Column({type: "bigint" , length: 20 })
        CustomerID;

        @Column({ type: "string" }) 
        AddressTitle;
        
        @Column({ type: "decimal" })
        CustomerLatitude;
        
        @Column({ type: "decimal" })
        CustomerLongitude;

        @OneToOne(() => Customer, CustomerFk => CustomerFk.CustomerID)
        CustomerFk;
}