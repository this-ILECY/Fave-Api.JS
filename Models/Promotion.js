import { PrimaryGeneratedColumn, OneToMany, ManyToOne, Column } from 'typeorm';
import { Shop } from './Shop';

export class Promotion {
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
    @ManyToOne(Shop, shop => shop.promotions)
    shop;

    @ManyToMany(() => Product)
    @JoinTable()
    products;

}

/*
        public long PromotionID { get; set; }
        public long ProductID { get; set; }
        public long ShopID { get; set; }
        public long BasePrice { get; set; }
        public long DiscountPrice { get; set; }
        public int Stock { get; set; }
        public int QualityGrade { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime StartDate { get; set; }
        public bool IsActive{ get; set; }



                public Product productFk { get; set; }
        public Shop shopFk { get; set; }
        */