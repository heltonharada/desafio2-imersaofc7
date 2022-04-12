// export class Transaction {}
import {
  Column,
  DataType,
  PrimaryKey,
  Model,
  Table,
} from 'sequelize-typescript';

// Os campos da tabela de transactions serão: id, type -> credit ou debit, amount.

@Table({ tableName: 'transactions' })
export class Transaction extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  tipo: string;

  @Column({ type: DataType.DECIMAL(10, 2) })
  amount: number;
}
