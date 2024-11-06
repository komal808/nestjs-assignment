// src/order/infrastructure/order.module.ts

import { Module } from '@nestjs/common';
import { OrderService } from './application/order.service';
import { OrderController } from './infrastructure/order.controller';
import { InMemoryOrderCaching } from './infrastructure/in-memory-order.repository';
import { ORDER_REPOSITORY } from './domain/order.repository';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [
    OrderService,
    { provide: ORDER_REPOSITORY, useClass: InMemoryOrderCaching },
  ],
  exports: [ORDER_REPOSITORY],
})
export class OrderModule { }
