import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MobileModule } from './mobile/mobile.module';
import { VcModule } from './vc/vc.module';

@Module({
  imports: [AuthModule, MobileModule, VcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
