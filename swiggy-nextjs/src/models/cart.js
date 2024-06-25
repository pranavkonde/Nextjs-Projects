const mongoose = require("mongoose");
const { Schema } = mongoose;

const MenuItemSchema = new Schema({
  description: String,
  id: String,
  imageId: String,
  isVeg: Boolean,
  name: String,
  price: Number,
});

const CartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    restaurantId: {
        type: String,
        required: true,
        unique: true,
    },
    items: [MenuItemSchema],
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);

export default Cart;
