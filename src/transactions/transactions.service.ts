import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
// import { Sequelize } from 'sequelize-typescript';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './models/transaction.model';
// import { Repository } from 'sequelize-typescript';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction)
    private transactionModel: typeof Transaction,
  ) {}
  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create({
      amount: createTransactionDto.amount,
    });
  }
  // private readonly transactions: Transaction[] = [];

  // create(transaction: Transaction) {
  //   this.transactions.push(transaction);
  // }
  // findAll(): Transaction[] {
  //   console.log('Retornou as transações!');
  //   return this.transactions;
  // }
  findAll() {
    return this.transactionModel.findAll();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} transaction`;
  // }

  // update(id: number, updateTransactionDto: UpdateTransactionDto) {
  //   return `This action updates a #${id} transaction`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} transaction`;
  // }
}
