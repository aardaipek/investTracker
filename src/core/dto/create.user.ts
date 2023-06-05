import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Role } from "../../config/auth/guards/guard.decorators";

export class CreateUserDto {
    @IsString()
    @MaxLength(70)
    @IsNotEmpty()
    readonly name: string;
 
    @IsString()
    @MaxLength(70)
    @IsNotEmpty()
    readonly surname: string;

    @IsString()
    @MaxLength(150)
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    readonly roles: Role[];
}
