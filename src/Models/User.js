import { Column,PrimaryGeneratedColumn,OneToOne,Entity } from 'typeorm';
import { Customer } from  './Customer';
import { Shop } from './Shop';

@Entity("User")
export class User 
{
        @PrimaryGeneratedColumn("identity")
        UserID;

        @Column({ type: "datetime" })
        userCreatedDate;

        @Column({ type: "bool" })
        isActive; 

        @Column({ type: "bool" })
        isDeleted; 

        @OneToOne(() => Customer, CustomerFk => CustomerFk.UserID)
        CustomerFk; 

        @OneToOne(() => Shop , ShopFk => ShopFk.UserID)
        ShopFk; 
}