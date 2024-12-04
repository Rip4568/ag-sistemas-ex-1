import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3) //? deveria ser mais ? obviamente. mas pra que ? é so um projeto teste :)
  password: string;
}
