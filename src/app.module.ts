import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'shivam&kartikey',
  database: 'nestjs',
  insecureAuth: true,
  autoLoadEntities: true,
  synchronize: true,
};
@Module({
  imports: [UserModule, TypeOrmModule.forRoot(ormOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
