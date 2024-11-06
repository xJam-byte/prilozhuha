import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserDependent } from "./user-dependent.model";
import { CreateDependentDto } from "./Dto/create.dependent.dto";

@Injectable()
export class UserDependentService {
  constructor(
    @InjectModel(UserDependent)
    private readonly userModel: typeof UserDependent
  ) {}

  async findOneByEmail(email: string): Promise<UserDependent> {
    return this.userModel.findOne({ where: { email } });
  }
  async createUser(
    createCustomerDto: CreateDependentDto
  ): Promise<UserDependent> {
    return this.userModel.create(createCustomerDto);
  }
}
