import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDependentDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
