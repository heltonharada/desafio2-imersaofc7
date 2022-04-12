import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { TransactionsModule } from './transactions/transactions.module';
import { Transaction } from './transactions/models/transaction.model';

// Ecma script 7 => decorators

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      // username: 'root',
      // password: '',
      // storage: ':memory:',
      models: [Transaction],
      autoLoadModels: true,
      // synchronize: true,
    }),
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
