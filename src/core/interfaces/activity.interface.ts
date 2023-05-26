import { Document } from 'mongoose';

export interface IActivity extends Document{
    name: string;
    isSuccess: boolean;
    type: number; // TODO enum yap
    portfolioId: number;
    purchaseDate: string;
    quantity: number;
    price: number;
}
