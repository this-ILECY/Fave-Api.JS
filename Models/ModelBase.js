class ModelBase
{
    constructor()
    {
        this.IsDeleted = false;
        this.CreatedDate = new Date().toISOString();
    }
}
export default ModelBase;