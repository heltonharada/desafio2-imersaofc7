import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

// export class CreateTransactionDto {}
export class CreateTransactionDto {
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  tipo: string;
}
