import { Body, Controller, Get, Param, Post, NotFoundException, InternalServerErrorException, Logger } from '@nestjs/common';
import { OrderService } from '../application/order.service';
import { OrderDto } from '../application/order.dto';
import { Order } from '../domain/order';

@Controller('order')
export class OrderController {
  private readonly logger = new Logger(OrderController.name);

  constructor(private readonly orderService: OrderService) { }

  @Post()
  async createOrder(@Body() createOrderDto: OrderDto): Promise<Order> {
    try {
      return await this.orderService.createOrder(createOrderDto);
    } catch (error) {
      this.logger.error('Failed to create order', error.stack);
      throw new InternalServerErrorException('Failed to create order');
    }
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<Order> {
    try {
      const order = await this.orderService.getOrderById(id);
      return order;
    } catch (error) {
      if (error instanceof NotFoundException) {
        this.logger.warn(`Order with ID ${id} not found`);
        throw error;
      }

      this.logger.error('Failed to retrieve order', error.stack);
      throw new InternalServerErrorException('Failed to retrieve order');
    }
  }
}
