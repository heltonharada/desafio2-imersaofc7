import { Module } from '@nestjs/common';
import { TransactionsController } from './app.controller';
import { TransactionsService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

// Ecma script 7 => decorators

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      database: 'sqlite_db',
      username: 'root',
      password: '',
      storage: ':memory:',
      models: [__dirname + '**/*.model{.ts, .js}'],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class AppModule {}
