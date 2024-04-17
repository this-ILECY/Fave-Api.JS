import { PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Shop } from './Shop';
import { ModelBase } from './ModelBase';
import { Product } from './Product';

export class Promotion extends ModelBase {
    @PrimaryGeneratedColumn()
    PromotionID;

    @Column()
    ProductID;

    @Column()
    ShopID;

    @Column()
    BasePrice;

    @Column()
    DiscountPrice;

    @Column()
    Stock;

    @Column()
    QualityGrade;

    @Column()
    EndDate;

    @Column()
    StartDate;

    @Column()
    IsActive;

    // Define the many-to-one relationship with Shop
    @ManyToOne(() => Shop, ShopFk => ShopFk.ShopID)
    ShopFk;

    @ManyToMany(() => Product, ProductFk => ProductFk.ProductID)
    //@JoinTable()
    ProductFk;
}