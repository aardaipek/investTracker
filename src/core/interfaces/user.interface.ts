import { Document } from 'mongoose';
import { Role } from '../../config/auth/guards/guard.decorators';

export interface IUser extends Document{
    name: string;
    surname: string;
    email: string;
    isActive: boolean;
    password:string;
    accessToken: string;
    role: Role;
}
