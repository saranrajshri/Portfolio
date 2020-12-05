const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const session = require("express-session");

const routes = require("./routes/");

// Error Handlers
const { errorHandler } = require("./middlewares/errorHandlers");

// Rate Limiter
const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Express Session
const expressSession = session({
  secret: "abc",
  resave: false,
  saveUninitialized: false,
});

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser("abc"));
app.use(expressSession);
app.use(limiter);
app.use(xss()); // santize body, params, url
app.use(hpp()); // To prevent HTTP parameter pollution attack
app.use(helmet()); // To secure from setting various HTTP headers
app.use(mongoSanitize());

// log only 4xx and 5xx responses to console
app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);

// Routes
app.use("/api", routes);

// Error Handlers
app.use(errorHandler);

// Run app
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
