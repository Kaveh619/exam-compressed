import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { Company } from '../companies/company.model';
import { CreateUserDto } from '../common/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}

  async getUserById(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    user['companies'] = await this.companyModel.find({ userId: id });
    return user;
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    await user.save();

    await this.sendHelloEmail(user);
    return user;
  }

  private async sendHelloEmail(user: User) {
    // ارسال ایمیل خوش‌آمدگویی
    console.log('Sending email to:', user.email);
  }
}
