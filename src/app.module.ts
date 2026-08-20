import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CatsModule } from './modules/cats.module';
import { RequestLoggerMiddleware } from './middleware/request-logger.middleware';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('cats');
  }
}
