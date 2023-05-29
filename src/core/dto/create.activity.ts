import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateActivityDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
 
    @IsNumber()
    @IsNotEmpty()
    readonly type: number;

    @IsString()
    @IsNotEmpty()
    readonly portfolioId: string;

    @IsString()
    @IsNotEmpty()
    readonly purchaseDate: string;

    @IsNumber()
    @IsNotEmpty()
    readonly quantity: number;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
}
