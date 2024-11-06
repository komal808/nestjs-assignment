import { Injectable } from '@nestjs/common';
import { Order } from '../domain/order';
import { OrderRepository } from '../domain/order.repository';

@Injectable()
export class InMemoryOrderCaching implements OrderRepository {
  private orderMap: Map<string, Order> = new Map();

  async save(order: Order): Promise<void> {
    this.orderMap.set(order.id, order);
  }

  async findById(id: string): Promise<Order> {
    return this.orderMap.get(id);
  }
}
