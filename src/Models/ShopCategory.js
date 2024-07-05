import { PrimaryGeneratedColumn,Column,OneToMany,Entity } from 'typeorm';
import { ModelBase } from './ModelBase';
import { Shop } from './Shop'; 

@Entity("ShopCategory")
export class ShopCategory extends ModelBase 
{
        @PrimaryGeneratedColumn({type: "bigint" , length: 20 })
        ShopCategoryID;
        
        @Column({ type:"string" ,  length: 300 })
        ShopCategoryTitle; 

        @Column({ type: "string" })
        ShopCategoryDescription; 

        @OneToMany(() => Shop, ShopFk => ShopFk.ShopID)
        ShopFk;
}