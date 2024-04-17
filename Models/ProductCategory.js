import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './Product';
import { ModelBase } from './ModelBase';

export class ProductCategory extends ModelBase {

    @PrimaryGeneratedColumn()
    ProductCategoryID;

    @Column()
    ProductCategoryTitle;

    @Column()
    ProductCategoryDescription;

    // Define the many-to-one relationship with Product
    @OneToMany(() => Product, product => product.ProductCategoryID)
    ProductFk;
}