import ModelBase from "./ModelBase";
import { Product } from "./Product";
import { PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProductCategory } from "./ProductCategory";


export class Product extends ModelBase {
    @PrimaryGeneratedColumn()
    ShopID;

    @Column()
    ProductCategoryID;

    @Column()
    ProductCode;

    @Column()
    ProductTitle;

    @Column()
    description;

    // Define the many-to-one relationship with Shop
    @ManyToOne(() => Shop, shop => shop.products)
    shop;

    // Define the one-to-many relationship with ProductCategory
    @ManyToOne(() => ProductCategory, productCategory => productCategory.products)
    productCategory;

    @ManyToMany(() => Promotion)
    @JoinTable()
    promotions;

}




/*
public long ProductID { get; set; }
        public long ShopID { get; set; }
        public long ProductCategoryID { get; set; }
        public long ProductCode{ get; set; }
        public string ProductTitle { get; set; }
        public string description{ get; set; }


        public List<Promotion> promotionFk { get; set; }
        */