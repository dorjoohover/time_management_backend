import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Order, OrderSchema } from "schema/order.schema";
import { OrderController } from "./order.controller";

@Module({
    imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])],
    controllers: [OrderController],

})
export class OrderModule {}