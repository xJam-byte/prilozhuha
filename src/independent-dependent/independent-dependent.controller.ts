import { Body, Controller, Post } from "@nestjs/common";
import { IndependentDependentService } from "./independent-dependent.service";
import { CreateBothDto } from "./Dto/create.both.dto";

@Controller("independent-dependent")
export class IndependentDependentController {
  constructor(private bothService: IndependentDependentService) {}
  @Post()
  create(@Body() dto: CreateBothDto) {
    return this.bothService.create(dto);
  }
}
