import { PrimaryGeneratedColumn,Column,OneToMany } from 'typeorm';
import { ModelBase } from './ModelBase';
import { Shop } from './Shop'; 

export class ShopCategory extends ModelBase 
{
        @PrimaryGeneratedColumn()
        ShopCategoryID;
        
        @Column()
        ShopCategoryTitle; 

        @Column()
        ShopCategoryDescription; 

        @OneToMany(() => Shop, ShopFk => ShopFk.ShopID)
        ShopFk;
}