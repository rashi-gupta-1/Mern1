const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/mern_admin"; // Update with your MongoDB URI

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDb;
