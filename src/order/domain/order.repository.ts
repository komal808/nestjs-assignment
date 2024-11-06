// src/order/domain/order.repository.ts
import { Order } from './order';

export const ORDER_REPOSITORY = Symbol('OrderRepository');

export interface OrderRepository {
  save(order: Order): Promise<void>;
  findById(id: string): Promise<Order>;
}
