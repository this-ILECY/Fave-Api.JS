import { ModelBase } from "./ModelBase";
import { Product } from "./Product";
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { ProductCategory } from "./ProductCategory";
import { Promotion } from "./Promotion";
import { Shop } from "./Shop";

@Entity("Product")
export class Product extends ModelBase {
    @PrimaryGeneratedColumn({ type: "bigint" })
    ProductID;

    @Column({ type: "bigint" })
    ShopID;

    @Column({ type: "bigint" })
    ProductCategoryID;

    @Column({type: "bigint" , length: 30 })
    ProductCode;

    @Column({ type: "string" })
    ProductTitle;

    @Column({ type: "string" })
    Description;

    // Define the many-to-one relationship with Shop
    @ManyToOne(() => Shop, ShopFk => ShopFk.ShopID)
    ShopFk;

    // Define the one-to-many relationship with ProductCategory
    @ManyToOne(() => ProductCategory, ProductCategoryFk => ProductCategoryFk.ProductCategoryID)
    ProductCategoryFk;

    @ManyToMany(() => Promotion,PromotionFk => PromotionFk.PromotionID)
    @JoinTable()
    PromotionFk;
}