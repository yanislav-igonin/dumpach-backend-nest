import { IsString, IsBoolean, IsArray } from 'class-validator';

export class CreateThreadDto {
  @IsString()
  title: string;

  @IsString()
  text: string;

  @IsBoolean()
  isSage: boolean;
}
