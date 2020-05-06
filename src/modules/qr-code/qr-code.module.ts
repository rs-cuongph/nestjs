import { Module } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { QrCodeController } from './qr-code.controller';
import { AppService } from 'src/app.service';

@Module({
    imports: [],
    controllers: [QrCodeController],
    providers: [QrCodeService, AppService],
})
export class QrCodeModule {}
