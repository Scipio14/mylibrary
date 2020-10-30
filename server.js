if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
//Imports
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");

//Settings
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
//bodyparser
const bodyParser = require("body-parser");

//Static
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

//DB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Database is connected to mongoose"))
  .catch((err) => console.log(err));

app.use("/", indexRouter);
app.use("/authors", authorRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
