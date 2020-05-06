import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AppService {
    secretKey: any = 'ABCXYZ1231231231231';

    decrypt(value) {
        const bytes = CryptoJS.AES.decrypt(value, this.secretKey);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    }

    encrypt(value) {
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), this.secretKey);
        return encryptedData.toString();
    }
}
