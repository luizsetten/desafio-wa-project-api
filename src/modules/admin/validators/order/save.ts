import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';

export class SaveValidator implements IOrder {
  public createdDate?: Date;
  public updatedDate?: Date;

  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 50 })
  public description: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty({ required: true, type: 'integer', maxLength: 50 })
  public quantity: number;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(150)
  @ApiProperty({ required: true, type: 'float', maxLength: 150 })
  public value: number;
}
