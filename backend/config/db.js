const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://pranavbh003:ba39DRX4mH8ELiab@chat-app.ku6ecth.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });

    console.log('MongoDB Connected');
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
