import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {
    @Prop()
    name: string;

    @Prop([String])
    menus: string[];

    @Prop()
    pdf_menu_image_url: string;
}

export const restaurantSchema = SchemaFactory.createForClass(Restaurant);