import { Injectable } from '@nestjs/common';
// import { Sequelize } from 'sequelize-typescript';
// import { CreateTransactionsDto } from './dto/create-transactions.dto';
import { Transaction } from './models/transaction.model';
// import { Repository } from 'sequelize-typescript';

@Injectable()
export class TransactionsService {
  // create(createTransactionsDto: CreateTransactionsDto){
  //   return 'This action adds a new transacion';
  // }
  private readonly transactions: Transaction[] = [];

  create(transaction: Transaction){
    this.transactions.push(transaction);
  }
  findAll(): Transaction[] {
    console.log('Retornou as transações!');
    return this.transactions;
  }
}
