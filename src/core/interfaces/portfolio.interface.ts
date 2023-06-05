import { Document } from 'mongoose';

export interface IPortfolio extends Document{
    name: string;
    isActive: boolean;
    priority: number;
    dashboardId: number;
    currency: string
}
