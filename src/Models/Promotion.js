import { PrimaryGeneratedColumn, ManyToOne, Column , Entity, JoinTable } from 'typeorm';
import { Shop } from './Shop';
import { ModelBase } from './ModelBase';
import { Product } from './Product';

@Entity("Promotion")
export class Promotion extends ModelBase {
    @PrimaryGeneratedColumn({ type: "bigint" })
    PromotionID;

    @Column({ type: "bigint" })
    ProductID;

    @Column({ type: "bigint" })
    ShopID;

    @Column({ type: "bigint" })
    BasePrice;

    @Column({ type: "bigint" })
    DiscountPrice;

    @Column({ type: "int" })
    Stock;

    @Column({ type: "int" })
    QualityGrade;

    @Column({ type: "datetime" })
    EndDate;

    @Column({ type: "datetime" })
    StartDate;

    @Column({ type: "bool" })
    IsActive;

    // Define the many-to-one relationship with Shop
    @ManyToOne((type) => Shop, ShopFk => ShopFk.ShopID)
    ShopFk;

    @ManyToMany(() => Product, ProductFk => ProductFk.ProductID)
    @JoinTable()
    ProductFk;
}