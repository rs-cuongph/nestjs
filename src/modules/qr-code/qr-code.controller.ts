import { Controller, Get, Render, Post, Res, Req, Body } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';

@Controller('qr-code')
export class QrCodeController {
    constructor(private qrCodeSv: QrCodeService) {}
    @Post('/create')
    // @Render('index')
    async create(@Body() body) {
        return await this.qrCodeSv.send(body);
    }
}
