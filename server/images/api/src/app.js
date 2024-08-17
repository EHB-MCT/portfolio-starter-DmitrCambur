const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const path = require("path");
const app = express();
const dotenvPath = path.resolve(__dirname, "../../../.env");

require("dotenv").config({ path: dotenvPath });

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const usersRouter = require("./routes/users");
const threadsRouter = require("./routes/threads");
const repliesRouter = require("./routes/replies");

app.use("/api", usersRouter);
app.use("/api", threadsRouter);
app.use("/api", repliesRouter);

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = app;
