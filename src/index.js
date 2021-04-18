const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const app = express();
const handlebars = require("express-handlebars");
const port = 3000;
const route = require("./routes");
const db = require("./config/db/index");

//connect to db
db.connect();

app.use(methodOverride("_method"));
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
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
app.listen(port, () => console.log(`example ${port}`));
route(app);
