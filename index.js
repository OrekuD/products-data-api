const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productsRoutes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/public", express.static("public"));

app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
