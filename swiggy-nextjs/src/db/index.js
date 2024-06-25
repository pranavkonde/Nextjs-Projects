import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
  "mongodb+srv://pkonde:PranavKonde@cluster0.aosahin.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
