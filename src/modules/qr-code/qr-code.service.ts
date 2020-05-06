import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { AppService } from '../../app.service';
import { MailService } from '../../core/services/mail.service';

@Injectable()
export class QrCodeService {
    constructor(private appSv: AppService, private mailSv: MailService) {}
    async getQRcodeImage(data: any) {
        return QRCode.toDataURL(data, { errorCorrectionLevel: 'M' });
    }

    async send(data: any) {
        const money = Math.round(Math.abs(data.total_bill) / data.list_member.length);
        const date = new Date(data.created_at);
        const json = {
            account: data.account,
            mount: money > 0 ? money : 1,
            expired: date.setHours(date.getHours() + 5),
        };
        const qr = await this.getQRcodeImage(this.appSv.encrypt(json));
        data.list_member.array.forEach(element => {
            console.log(element);
        });
        // const message = {
        //     to: "receiver@sender.com",
        //     subject: "Message title",
        //     text: "Plaintext version of the message",
        //     html: "<p>HTML version of the message</p>"
        // };
        // this.mailSv.sendMail();
        return 'ok';
    }
}
