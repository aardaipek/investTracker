import { Document } from 'mongoose';

export interface IUser extends Document{
    name: string;
    surname: string;
    email: string;
    isActive: boolean;
    password:string;
    //roles: string[]; TODO ROLES enum needed
}
