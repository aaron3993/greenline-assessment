const express = require("express");
const companyRoutes = require("./routes/companies");

const db = require("./config/database");

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error", err));

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Home page"));
app.use("/companies", companyRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
