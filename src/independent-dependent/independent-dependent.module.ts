import { Module } from "@nestjs/common";
import { IndependentDependentController } from "./independent-dependent.controller";
import { IndependentDependentService } from "./independent-dependent.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { IndependentsDependents } from "./independent-dependent.model";

@Module({
  controllers: [IndependentDependentController],
  providers: [IndependentDependentService],
  imports: [SequelizeModule.forFeature([IndependentsDependents])],
})
export class IndependentDependentModule {}
