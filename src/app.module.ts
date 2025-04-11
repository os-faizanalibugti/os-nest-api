import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MobileModule } from './mobile/mobile.module';

@Module({
  imports: [AuthModule, MobileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
