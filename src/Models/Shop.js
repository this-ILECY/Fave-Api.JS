import { PrimaryGeneratedColumn, Column, OneToMany,OneToOne,ManyToOne, Entity } from 'typeorm';
import { ModelBase } from './ModelBase';
import { User } from './User';
import { Product } from './Product';
import { ShopCategory } from './ShopCategory';
import { Promotion } from './Promotion';

@Entity("Shop")
export class Shop extends ModelBase {
    @PrimaryGeneratedColumn({ type: "bigint" })
    ShopID;

    @Column({ type: "bigint" })
    UserID;

    @Column({type: "bigint" , length: 30 })
    ShopCategoryID;

    @Column({type: "string" , length: 300 })
    ShopName;

    @Column({ type: "string" })
    ShopAddress;

    @Column({ type: "string" })
    ShopBanner;

    @Column({ type: "string" })
    ShopAvatar;

    @Column({ type: "string" })
    TelePhone;

    @Column({ type: "string" })
    CellPhone;

    @Column({ type: "decimal" })
    ShopLatitude;

    @Column({ type: "decimal" })
    ShopLongitude;

    @Column({ type: "bool" })
    IsActive;

    // Define the one-to-many relationship with Product
    @OneToMany(() => Product, ProductsFk => ProductsFk.ShopID)
    ProductsFk;
    
    @ManyToOne(() => ShopCategory , ShopCategoryFk => ShopCategoryFk.ShopCategoryID)
    ShopCategoryFk;

    @OneToOne(() => User, UserFk => UserFk.UserID)
    UserFk;
    
    // Define the one-to-many relationship with Promotion
    @OneToMany(() => Promotion, PromotionFk => PromotionFk.PromotionID)
    PromotionFk;
}
