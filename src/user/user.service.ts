import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcypt from 'bcrypt';
import { Model } from 'mongoose';
import { IUser } from 'src/common/interfaces/user.interface';
import { USER } from 'src/common/models/models';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(USER.name) private readonly model: Model<IUser>) {}
  async hashPassword(password: string): Promise<string> {
    const salt = await bcypt.genSalt(10);
    return await bcypt.hash(password, salt);
  }
  async create(userDTO: UserDTO): Promise<IUser> {
    const hash = await this.hashPassword(userDTO.password);
    const newUser = new this.model({ ...userDTO, password: hash });
    return await newUser.save();
  }
}