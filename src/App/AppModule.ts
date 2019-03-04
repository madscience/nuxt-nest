import { Module } from '@nestjs/common';
import { DefaultController } from './Controller/DefaultController';
import { AppService } from './Service/AppService';
import { ConfigModule } from '../Config/ConfigModule';

@Module({
  imports: [ConfigModule],
  controllers: [DefaultController],
  providers: [AppService],
})
export class AppModule {}
