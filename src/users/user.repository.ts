import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  
  async findByIdWithCompanies(id: string): Promise<any> {
    return this.userModel.aggregate([
      { $match: { _id: id } },
      {
        $lookup: {
          from: 'companies',
          localField: '_id',
          foreignField: 'userId',
          as: 'companies',
        },
      },
    ]);
  }
  
}
