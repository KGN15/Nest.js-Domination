import { Module } from '@nestjs/common';
import { CatsController } from '../controllers/cats.controller';
import { CatsService } from '../providers/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
