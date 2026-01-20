import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5416,
      username: 'postgres',
      password: '',
      database: 'db_todo',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}
