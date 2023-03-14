import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../Entity/user.entity';
import { CreateUserDto } from '../DTO/create.user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private repo: Repository<UserEntity>,
  ) {}
  async getUser() {
    return await this.repo.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user: UserEntity = new UserEntity();
    const { name, email, phone } = createUserDto;
    user.name = name;
    user.email = email;
    user.phone = phone;
    this.repo.create(user);
    this.repo.create(user);
    return await this.repo.save(user);
  }
}
