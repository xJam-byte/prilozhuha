import { Injectable } from "@nestjs/common";
import { CreateIndependentDto } from "./Dto/create.independent.dto";
import { UserIndependent } from "./user-independent.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class UserIndependentService {
  constructor(
    @InjectModel(UserIndependent)
    private readonly userModel: typeof UserIndependent
  ) {}

  async findOneByEmail(email: string): Promise<UserIndependent> {
    return this.userModel.findOne({ where: { email } });
  }
  async createUser(
    createCustomerDto: CreateIndependentDto
  ): Promise<UserIndependent> {
    return this.userModel.create(createCustomerDto);
  }
}
