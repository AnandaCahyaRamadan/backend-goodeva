import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepo: Repository<Todo>,
  ) {}

  findAll(search?: string) {
    return this.todoRepo.find({
      where: search ? { title: ILike(`%${search}%`) } : {},
    });
  }

  create(dto: CreateTodoDto) {
    return this.todoRepo.save(dto);
  }

  update(id: number, dto: UpdateTodoDto) {
    return this.todoRepo.update(id, dto);
  }
}
