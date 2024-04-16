import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Shop } from './Shop';
import { Product } from './Product';

export class ProductCategory {

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
    description;

    // Define the many-to-one relationship with Product
    @OneToMany(() => Product, products => products.productCategory)
    products;
}



/*
        public long ProductID { get; set; }
        public long ShopID { get; set; }
        public long ProductCategoryID { get; set; }
        public long ProductCode{ get; set; }
        public string ProductTitle { get; set; }
        public string description{ get; set; }

        public Shop shopFk { get; set; }
        public List<Promotion> promotionFk { get; set; }
        public ProductCategory productCategoryFk { get; set; }

        */