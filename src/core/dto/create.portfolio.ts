import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePortfolioDto {
    @IsString()
    @MaxLength(70)
    @IsNotEmpty()
    readonly name: string;
 
    @IsNumber()
    @IsNotEmpty()
    readonly priority: number;

    @IsString()
    @IsNotEmpty()
    readonly dashboardId: string;
}
