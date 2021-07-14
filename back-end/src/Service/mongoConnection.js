const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Hemant:ASHish$$123@cluster0.h4fve.mongodb.net/fork?retryWrites=true&w=majority";

const getDBClient = async () => {
  const client = await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
};

module.exports = {
  getDBClient: getDBClient,
};
