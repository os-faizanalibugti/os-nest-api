import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MobileModule } from './mobile/mobile.module';
import { VcModule } from './vc/vc.module';
import { CsModule } from './cs/cs.module';

@Module({
  imports: [AuthModule, MobileModule, VcModule, CsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
