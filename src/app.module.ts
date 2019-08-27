import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AcademyModule } from './academy/academy.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({      /////forRoot() method accepts the same configuration object as createConnection() from the TypeORM package
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12#Ramesh',
      database: 'rameshdb',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
    AcademyModule,
  ],
})
export class ApplicationModule {
  //constructor(private readonly connection: Connection) {}
}
 