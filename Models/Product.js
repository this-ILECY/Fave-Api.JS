import { ModelBase } from "./ModelBase";
import { Product } from "./Product";
import { PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ProductCategory } from "./ProductCategory";
import { Promotion } from "./Promotion";
import { Shop } from "./Shop";


export class Product extends ModelBase {
    @PrimaryGeneratedColumn()
    ProductID;

    @Column()
    ShopID;

    @Column()
    ProductCategoryID;

    @Column()
    ProductCode;

    @Column()
    ProductTitle;

    @Column()
    Description;

    // Define the many-to-one relationship with Shop
    @ManyToOne(() => Shop, shop => shop.ShopID)
    ShopFk;

    // Define the one-to-many relationship with ProductCategory
    @ManyToOne(() => ProductCategory, productCategory => productCategory.ProductCategoryID)
    ProductCategoryFk;

    @OneToMany(() => Promotion, promotion, promotion.PromotionID)
    //@JoinTable()
    PromotionFk;
}