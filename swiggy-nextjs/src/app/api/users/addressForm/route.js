import connectToDB from "@/db";
import Joi from "joi";
import { NextResponse } from "next/server";
import User from "@/models/user";

const AddressDetailsSchema = Joi.object({
  userId: Joi.string().required(),
  fullname: Joi.string().required(),
  address: Joi.string().required(),
  phoneno: Joi.string().required(),
});

export async function POST(req, res) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const {userId, fullname, address, phoneno} = extractData; 
    const { error } = AddressDetailsSchema.validate({userId, fullname, address, phoneno});
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const user = await User.findOne({ _id: userId })
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found or invalid request.",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { fullname, address, phoneno } },
      { new: true} 
    );

    if (updatedUser) {
      return NextResponse.json({
        success: true,
        message: "Address added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong Please try again",
      });
    }

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "An unexpected error occurred.",
    });
  }
}
