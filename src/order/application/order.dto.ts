import { IsNotEmpty, IsString } from 'class-validator';

export class OrderDto {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  quantity: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
