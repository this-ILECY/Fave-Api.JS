import { Column } from 'typeorm';
export class ModelBase {
    @Column()
    CreatedDate;

    @Column()
    IsDeleted;
}
// export default ModelBase;