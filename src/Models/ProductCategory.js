import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { Product } from './Product';
import { ModelBase } from './ModelBase';

@Entity("ProductCategory")
export class ProductCategory extends ModelBase {

    @PrimaryGeneratedColumn({type: "bigint" , length: 20 })
    ProductCategoryID;

    @Column({type: "string" , length: 300 })
    ProductCategoryTitle;

    @Column({ type: "string" })
    ProductCategoryDescription;

    // Define the many-to-one relationship with Product
    @OneToMany(() => Product, ProductFk => ProductFk.ProductCategoryID)
    ProductFk;
}