import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTransactionsDto } from './dto/create-transactions.dto';
import { TransactionsService } from './app.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  findAll() {
    console.log('Estas são suas transações');
    return this.transactionsService.findAll();
  }
  @Post()
  create(@Body() createTransactionsDto: CreateTransactionsDto) {
    console.log(createTransactionsDto);
    return this.transactionsService.create(createTransactionsDto);
  }
}
