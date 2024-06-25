import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://pkonde:PranavKonde@cluster0.aosahin.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Auth database connected successfully"))
    .catch((e) => console.log(e));
};

export default connectToDB;
