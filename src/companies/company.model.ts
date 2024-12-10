// export class Company {
//   userId: string;
//   name: string;
// }

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Company extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  name: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
