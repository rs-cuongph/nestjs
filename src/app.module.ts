import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrCodeModule } from './modules/qr-code/qr-code.module';

@Module({
    imports: [QrCodeModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
