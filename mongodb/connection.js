import mongoose from "mongoose";

const Connection = () => {
  return mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default Connection;
