import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../domain/order';
import { ORDER_REPOSITORY, OrderRepository } from '../domain/order.repository';
import { OrderDto } from './order.dto';

@Injectable()
export class OrderService {
  constructor(
    @Inject(ORDER_REPOSITORY) private readonly orderRepository: OrderRepository,
  ) { }

  async createOrder(createOrderDto: OrderDto): Promise<Order> {
    const newOrder = new Order({
      id: Date.now().toString(),
      productId: createOrderDto.productId,
      quantity: createOrderDto.quantity,
      userId: createOrderDto.userId,
    });

    await this.orderRepository.save(newOrder.orderObj as Order);
    return newOrder.orderObj as Order;
  }

  async getOrderById(id: string): Promise<Order> {
    const foundOrder = await this.orderRepository.findById(id);
    if (!foundOrder) {
      throw new NotFoundException('Order not found');
    }
    return foundOrder;
  }
}

