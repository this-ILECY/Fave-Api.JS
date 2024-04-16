import { PrimaryGeneratedColumn, Column, OneToMany,OneToOne,ManyToOne } from 'typeorm';
import { ModelBase } from './ModelBase';
import { User } from './User';
import { Product } from './Product';
import { ShopCategory } from './ShopCategory';
import { Promotion } from './Promotion';

export class Shop extends ModelBase {
    @PrimaryGeneratedColumn()
    ShopID;

    @Column()
    UserID;

    @Column()
    ShopCategoryID;

    @Column()
    ShopName;

    @Column()
    ShopAddress;

    @Column()
    ShopBanner;

    @Column()
    ShopAvatar;

    @Column()
    TelePhone;

    @Column()
    CellPhone;

    @Column()
    ShopLatitude;

    @Column()
    ShopLongitude;

    @Column()
    IsActive;

    @Column()
    UserFk;

    // Define the one-to-many relationship with Product
    @OneToMany(() => Product, product => product.ShopID)
    ProductsFk;
    
    @ManyToOne(() => ShopCategory , shopcategory, shopcategory.ShopCategoryID)
    ShopCategoryFk;

    @OneToOne(() => User, user,user.UserID)
    UserFk;
    
    // Define the one-to-many relationship with Promotion
    //@OneToMany(() => Promotion, promotions => promotions.shop)
    //promotions;
}
