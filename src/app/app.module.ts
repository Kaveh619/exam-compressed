import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/user.model';
import { Company, CompanySchema } from '../companies/company.model';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/exam'),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'company', schema: CompanySchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
