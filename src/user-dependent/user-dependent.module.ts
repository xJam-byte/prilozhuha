import { Module } from "@nestjs/common";
import { UserDependentController } from "./user-dependent.controller";
import { UserDependentService } from "./user-dependent.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserDependent } from "./user-dependent.model";

@Module({
  controllers: [UserDependentController],
  providers: [UserDependentService],
  imports: [SequelizeModule.forFeature([UserDependent])],
  exports: [UserDependentService],
})
export class UserDependentModule {}
