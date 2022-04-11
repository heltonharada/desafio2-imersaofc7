// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
// } from 'typeorm';
import { Column, Table, DataType } from 'sequelize-typescript';

// Os campos da tabela de transactions serão: id, type -> credit ou debit, amount, creationDate, updatedOn.

@Table
export class Transaction {
  @Column({ primaryKey: true })
  id: number;

  @Column({
    type: DataType.ENUM,
    values: ['credit', 'debit'],
    allowNull: false,
  })
  type: string;

  @Column({ type: DataType.DOUBLE, allowNull: false })
  amount: number;
}
