import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { log } from "console";
import { CreateDependentDto } from "src/user-dependent/Dto/create.dependent.dto";
import { LoginDependentDto } from "src/user-dependent/Dto/login.dependent.dto";
import { UserDependentService } from "src/user-dependent/user-dependent.service";
import { CreateIndependentDto } from "src/user-independent/Dto/create.independent.dto";
import { LoginIndependentDto } from "src/user-independent/Dto/login.independent.dto";
import { UserIndependent } from "src/user-independent/user-independent.model";
import { UserIndependentService } from "src/user-independent/user-independent.service";

@Injectable()
export class AuthService {
  constructor(
    private customerService: UserIndependentService,
    private customerServiceDep: UserDependentService,
    private jwtService: JwtService
  ) {}
  async login(customerDto: LoginIndependentDto) {
    const customer = await this.validateCustomer(customerDto);
    const tkn = this.generateToken(customer);
    log(tkn);
    return [tkn, customer];
  }

  async registration(customerDto: CreateIndependentDto) {
    const candidate = await this.customerService.findOneByEmail(
      customerDto.email
    );

    if (candidate) {
      throw new HttpException(
        "Пользователь с таким email уже существует",
        HttpStatus.BAD_REQUEST
      );
    }

    const hash = await bcrypt.hash(customerDto.password, 5);
    const customer = await this.customerService.createUser({
      ...customerDto,
      password: hash,
    });
    const tkn = this.generateToken(customer);
    log(tkn);
    return [tkn, customer];
  }
  async loginDep(customerDto: LoginDependentDto) {
    const customer = await this.validateCustomerDep(customerDto);
    const tkn = this.generateToken(customer);
    log(tkn);
    return [tkn, customer];
  }

  async registrationDep(customerDto: CreateDependentDto) {
    const candidate = await this.customerServiceDep.findOneByEmail(
      customerDto.email
    );

    if (candidate) {
      throw new HttpException(
        "Пользователь с таким email уже существует",
        HttpStatus.BAD_REQUEST
      );
    }

    const hash = await bcrypt.hash(customerDto.password, 5);
    const customer = await this.customerServiceDep.createUser({
      ...customerDto,
      password: hash,
    });
    const tkn = this.generateToken(customer);
    log(tkn);
    return [tkn, customer];
  }

  private async generateToken(user: any) {
    const payload = { email: user.email, id: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateCustomer(customerDto: LoginIndependentDto) {
    const customer = await this.customerService.findOneByEmail(
      customerDto.email
    );
    const password = await bcrypt.compare(
      customerDto.password,
      customer.password
    );

    if (customer && password) {
      return customer;
    }
    throw new UnauthorizedException({ messade: "НЕККОРЕКТНО" });
  }
  private async validateCustomerDep(customerDto: LoginDependentDto) {
    const customer = await this.customerService.findOneByEmail(
      customerDto.email
    );
    const password = await bcrypt.compare(
      customerDto.password,
      customer.password
    );

    if (customer && password) {
      return customer;
    }
    throw new UnauthorizedException({ messade: "НЕККОРЕКТНО" });
  }
}
