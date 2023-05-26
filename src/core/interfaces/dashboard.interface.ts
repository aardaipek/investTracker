import { Document } from 'mongoose';

export interface IDashboard extends Document{
    name: string;
    isActive: boolean;
    priority: number;
    userId: number;
}
