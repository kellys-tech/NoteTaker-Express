const express = require("express");
const app = express();
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.status("public"));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log('listening at port' + PORT)
});