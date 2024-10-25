import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { CategoryModule } from './category/category.module';
import { PaymentModule } from './payment/payment.module';
import { ShippingAddressModule } from './shipping-address/shipping-address.module';

@Module({
  imports: [UserModule, ProductModule, OrderModule, CartModule, CategoryModule, PaymentModule, ShippingAddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
