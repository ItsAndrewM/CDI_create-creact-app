const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const { handleGetProducts } = require("./handlers/handleGetProducts");
const {
  handleGetProductCategories,
} = require("./handlers/handleGetProductCategories");
const { handleGetPosts } = require("./handlers/handleGetPosts");
const {
  handleGetProductVariations,
} = require("./handlers/handleGetProductVariations");
const {
  handleGetShippingMethods,
} = require("./handlers/handleGetShippingMethods");
const { handleGetShippingZones } = require("./handlers/handleGetShippingZones");
const { handleGetExchangeRate } = require("./handlers/handleGetExchangeRate");
const {
  handleGetShippingMethodByZone,
} = require("./handlers/handleGetShippingMethodByZone");
const { handleGetPostsById } = require("./handlers/handleGetPostsById");
const {
  handleGetPostsCategories,
} = require("./handlers/handleGetPostsCategories");
const { handleGetTaxes } = require("./handlers/handleGetTaxes");
const { handlePostOrder } = require("./handlers/handlePostOrder");
const { handleGetOrder } = require("./handlers/handleGetOrder");
const { handleGetCoupons } = require("./handlers/handleGetCoupons");
const {
  handleGetAllProductVariations,
} = require("./handlers/handleGetAllProductVariations");
const {
  handleContactSubmission,
} = require("./handlers/handleContactSubmission");
const {
  handleContactUsSubmission,
} = require("./handlers/handleContactUsSubmission");

const port = 8080;

const app = express();
app.use(express.static("public"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST,GET,OPTIONS,PUT,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  cors({
    origin: [
      "https://cdiclone-z337n.kinsta.app",
      "https://cdi-clone.vercel.app",
      "https://www.cdifurlers.com",
    ],
  })
);
app.use("/", express.static(__dirname + "/"));
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.sendFile("index.html", { root: path.join(__dirname, "public") });
// });
app.get("/products", handleGetProducts);
app.get("/products/category", handleGetProductCategories);
app.get("/posts", handleGetPosts);
app.get("/posts/:id", handleGetPostsById);
app.get("/post/categories", handleGetPostsCategories);
app.get("/products/variations/:id", handleGetProductVariations);
app.get("/products/variations/", handleGetAllProductVariations);
app.get("/shipping/methods", handleGetShippingMethods);
app.get("/shipping/zones", handleGetShippingZones);
app.get("/exchange-rate/:curCode", handleGetExchangeRate);
app.get("/shipping/method/zone", handleGetShippingMethodByZone);
app.get("/taxes/all", handleGetTaxes);
app.post("/order/create/:id", handlePostOrder);
app.get("/order/:id", handleGetOrder);
app.get("/coupons", handleGetCoupons);
app.post("/contact", handleContactSubmission);
app.post("/contact-us", handleContactUsSubmission);

app.listen(port, () => {
  console.log(`CDI Furlers Server listening on port ${port}`);
});

module.exports = app;
