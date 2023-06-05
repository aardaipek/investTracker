import { Document } from 'mongoose';
import { Role } from '../../config/auth/guard.decorators';

export interface IUser extends Document{
    name: string;
    surname: string;
    email: string;
    isActive: boolean;
    password:string;
    roles: Role[];
}
