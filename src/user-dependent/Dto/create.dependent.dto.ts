import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsEnum,
} from "class-validator";

export class CreateDependentDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly surname: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsEmail()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly iin: string;
}
