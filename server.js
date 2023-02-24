const express = require("express"); //import the express module ()
const app = express(); //create an express application
const { sequelize } = require("./db");
const port = 3000;
app.use(express.json());

const userRouter = require("./routers/users");

app.use("/users", userRouter);

const showRouter = require("./routers/shows");

app.use("/shows", showRouter);





This final block starts up the server on a specified port ('port') and prints a log comment to the console.
//create server to listen on port 3000
const server = app.listen(port, function () {
  // the listen() method listens for connections on the host and the port number
  console.log(`Node server is running on http://localhost:${port}..`);
});
