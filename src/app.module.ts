import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserDependentModule } from "./user-dependent/user-dependent.module";
import { UserIndependentModule } from "./user-independent/user-independent.module";
import { ConfigModule } from "@nestjs/config";
import { UserDependent } from "./user-dependent/user-dependent.model";
import { UserIndependent } from "./user-independent/user-independent.model";
import { AuthModule } from "./auth/auth.module";
import { IndependentDependentModule } from './independent-dependent/independent-dependent.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "Prilozhuha",
      // host: process.env.DB_HOST,
      // port: Number(process.env.DB_PORT),
      // username: process.env.DB_USER,
      // password: String(process.env.DB_PASSWORD),
      // database: process.env.DB_NAME,
      models: [UserDependent, UserIndependent],
      autoLoadModels: true,
      synchronize: true,
    }),
    UserDependentModule,
    UserIndependentModule,
    AuthModule,
    IndependentDependentModule,
  ],
})
export class AppModule {}
