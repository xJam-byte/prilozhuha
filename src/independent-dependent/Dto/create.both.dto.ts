import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateBothDto {
  @IsEmail()
  @IsNotEmpty()
  readonly dependent_id: number;

  @IsString()
  @IsNotEmpty()
  readonly independent_id: number;
}
