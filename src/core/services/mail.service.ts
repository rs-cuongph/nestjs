import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}
    public sendMail(jsonData: object): void {
        this.mailerService
            .sendMail(jsonData)
            .then((success: any) => {
                console.log(success);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }
}
