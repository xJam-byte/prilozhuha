import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { UserDependentModule } from "src/user-dependent/user-dependent.module";
import { UserIndependentModule } from "src/user-independent/user-independent.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserDependentModule,
    UserIndependentModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || "secret",
      signOptions: {
        expiresIn: "24h",
      },
    }),
  ],
})
export class AuthModule {}
