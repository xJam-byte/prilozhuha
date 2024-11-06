import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { IndependentsDependents } from "./independent-dependent.model";
import { CreateBothDto } from "./Dto/create.both.dto";

@Injectable()
export class IndependentDependentService {
  constructor(
    @InjectModel(IndependentsDependents)
    private repos: typeof IndependentsDependents
  ) {}

  async create(dto: CreateBothDto) {
    return await this.repos.create(dto);
  }
}
