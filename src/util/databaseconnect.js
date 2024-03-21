const mongoose = require("mongoose");

export const databaseconnect = async () => {
  await mongoose
    .connect(process.env.DB_URL, {
      dbName: "Naqui-Project",
    })
    .then((data) => {
      console.log(`Database connected successfully ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(process.env.DB_URL);
};
