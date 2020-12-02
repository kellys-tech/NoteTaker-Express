//Imports express module
const express = require("express");

//tells node we are using an express server
const app = express();

//sets the PORT
const PORT = process.env.PORT || 3000;

//set up app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//route files for app responses
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//code to start server
app.listen(PORT, () => {
    console.log(`listening on port + http://localhost:${PORT}`)
});