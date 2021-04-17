const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const handlebars = require("express-handlebars");
const port = 3000;
const route = require("./routes");
const db = require("./config/db/index");

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// console.log('PATH', path.join(__dirname, 'resources/views'));

// Template engines
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);
app.listen(port, () => console.log(`example ${port}`));
