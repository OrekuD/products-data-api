const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/furnitureRoutes");
const shoesRoutes = require("./routes/shoesRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/public", express.static("public/products"));

app.use("/products/furniture", productRoutes);
app.use("/products/shoes", shoesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
