import connectToDB from "@/db";
import Cart from "@/models/cart"; 
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
    const userId = searchParams.get("id");

    console.log("VBNNCNNCNC", userId)
  try {
    await connectToDB();
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return NextResponse.json({
        success: false,
        message: "Failed to get cart details",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Cart retrieved successfully",
      cart: cart,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "An unexpected error occurred. Please try again.",
    });
  }
}
