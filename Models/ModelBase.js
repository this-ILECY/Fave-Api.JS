import { Column,Entity } from 'typeorm';

//@Entity()
export class ModelBase {
    @Column({ type: "bool" })
    CreatedDate;

    @Column({ type: "string" })
    IsDeleted;
}