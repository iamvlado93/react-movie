const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth-route"));

const PORT = config.get("port") || 5000;

mongoose.connect(config.get("mongoURL"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/", require("./routes/auth-route"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
