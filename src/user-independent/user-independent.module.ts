import { Module } from "@nestjs/common";
import { UserIndependentController } from "./user-independent.controller";
import { UserIndependentService } from "./user-independent.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserIndependent } from "./user-independent.model";

@Module({
  controllers: [UserIndependentController],
  providers: [UserIndependentService],
  exports: [UserIndependentService],
  imports: [SequelizeModule.forFeature([UserIndependent])],
})
export class UserIndependentModule {}
