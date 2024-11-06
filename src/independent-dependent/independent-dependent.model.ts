import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { UserDependent } from "src/user-dependent/user-dependent.model";
import { UserIndependent } from "src/user-independent/user-independent.model";

@Table({ tableName: "independents-dependents" })
export class IndependentsDependents extends Model<IndependentsDependents> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => UserDependent)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_dependent_id: number;

  @BelongsTo(() => UserDependent)
  userDependent: UserDependent;

  @ForeignKey(() => UserIndependent)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_independent_id: number;

  @BelongsTo(() => UserIndependent)
  userIndependent: UserIndependent;
}
