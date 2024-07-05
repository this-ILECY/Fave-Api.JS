import { PrimaryGeneratedColumn } from "typeorm";

export class Role
{
    @PrimaryGeneratedColumn("identity")
    RoleID;
}