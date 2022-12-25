const express = require("express");
const app = express();
require("dotenv").config();
// parse requests of content-type - application/json
app.use(express.json());
var cors = require("cors");
//connection to db and syncing db to update tables structure if there is a change in the modles
const models = require("./models/");
//to sync the models in the project and the db
models.sequelize
  .authenticate()
  .then(function () {
    console.log("Connection successful");
  })
  .catch(function (error) {
    console.log("Error creating connection:", error);
  });
app.use(cors());
//routes
app.use("/api/", require("./routes/task"));
app.use("/api/", require("./routes/user"));
app.use("/api/", require("./routes/company"));
app.use("/api/", require("./routes/project"));
app.use("/api/", require("./routes/meeting"));
// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. `);
});
