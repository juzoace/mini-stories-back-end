const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const Handlebars = require("handlebars");
const mongoose = require("mongoose");
const cors = require('cors');
// const key = require("./config/keys_dev");
require('dotenv').config();

const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

// Passport Config
require("./config/passport")(passport);

// Load envs

const mongoURI = process.env.MONGO_URI;

// Load Routes
const index = require("./routes/index");
const auth = require("./routes/auth");
const stories = require("./routes/stories");

// Load Keys
// Create mongo connection
async function db() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: false,
    });
  } catch (error) {
    console.log("Mongoose error", error);
  }
}

// Handlebars Helpers
const {
  truncate,
  stripTags,
  formatDate,
  select,
  editIcon,
} = require("./middleware/hbs");

// Init DB
db();

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Method Override Middelware
app.use(methodOverride("_method"));

// Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    helpers: {
      truncate,
      stripTags,
      formatDate,
      select,
      editIcon,
    },
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set("view engine", "handlebars");

app.use(cookieParser());
app.use(
  session({
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Set global vars
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Use Routes
app.use("/", index);
app.use("/auth", auth);
app.use("/stories", stories);

const port = process.env.PORT || 5175;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
