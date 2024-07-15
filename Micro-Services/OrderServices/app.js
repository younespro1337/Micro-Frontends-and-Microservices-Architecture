const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('./database/connectDatabase');

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

connect()
  .then((connection) => {
    console.log("SQL SERVER DATABASE IS CONNECTED!");
  })
  .catch((error) => {
    console.log("Database connection failed!", error);
  });

app.get('/', (req, res) => {
  return res.json("Express with SQL Server is Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
