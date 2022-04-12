import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  findAll() {
    // console.log('Estas são suas transações');
    return this.transactionsService.findAll();
  }
  @Post()
  create(
    @Body()
    createTransactionDto: CreateTransactionDto,
  ) {
    console.log(createTransactionDto);
    return this.transactionsService.create(createTransactionDto);
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.transactionsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
  //   return this.transactionsService.update(+id, updateTransactionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.transactionsService.remove(+id);
  // }
}
