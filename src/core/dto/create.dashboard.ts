import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateDashboardDto {
    @IsString()
    @MaxLength(70)
    @IsNotEmpty()
    readonly name: string;
 
    @IsNumber()
    @IsNotEmpty()
    readonly priority: number;

    @IsString()
    @IsNotEmpty()
    readonly userId: string;
}
