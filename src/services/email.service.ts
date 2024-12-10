import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async sendWelcomeEmail(email: string): Promise<void> {
    console.log(`Sending welcome email to ${email}`);
  }
}
