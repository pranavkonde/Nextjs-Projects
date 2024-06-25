import connectToDB from "@/db";
import Cart from "@/models/cart";
import Joi from "joi";
import { NextResponse } from "next/server";

const MenuItemSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  imageId: Joi.string().required(),
  isVeg: Joi.number().allow(null),
  price: Joi.number().required(),
});

const AddCartItemSchema = Joi.object({
  userId: Joi.string().required(),
  restaurantId: Joi.string().required(),
  menuItem: Joi.required(),
});

export async function POST(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { userId, restaurantId, menuItem } = extractData;
    const menuItemObj = extractData.menuItem;

    const { error: menuItemError } = MenuItemSchema.validate(menuItemObj);

    if (menuItemError) {
      return NextResponse.json({
        success: false,
        message: menuItemError.details[0].message,
      });
    }

    const { error } = AddCartItemSchema.validate({ userId, restaurantId, menuItem });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const cart = await Cart.findOne({ userId: userId });

    if (cart && cart._id) {
      cart.items.push(menuItemObj);
      const updatedCart = await Cart.findByIdAndUpdate(cart._id, {
        items: cart.items,
      }, { new: true });

      if (!updatedCart._id) {
        return NextResponse.json({
          success: false,
          message: "Failed to add cart item",
        });
      }
      return NextResponse.json({
        success: true,
        message: "Cart item added successfully",
        cart: updatedCart,
      });
    } else {
      const newCart = await Cart.create({
        userId: userId,
        restaurantId: restaurantId,
        items: [menuItemObj],
      });

      if (!newCart._id) {
        return NextResponse.json({
          success: false,
          message: "Failed to add cart item",
        });
      }
      return NextResponse.json({
        success: true,
        message: "Cart item added successfully",
        cart: newCart,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "An unexpected error occurred. Please try again.",
    });
  }
}
