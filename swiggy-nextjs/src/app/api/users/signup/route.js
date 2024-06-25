import connectToDB from "@/db";
import User from "@/models/user";
import Joi from "joi";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const SignUpSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export async function POST(req) {
  try {
    await connectToDB();

    const extractUserData = await req.json();
    const { username, email, password } = extractUserData;

    const { error } = SignUpSchema.validate({
      username,
      email,
      password,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      success: true,
      message: "Sign-up successful",
      user: {
        id: savedUser._id,
        username,
        email,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "An unexpected error occurred. Please try again.",
    });
  }
}
