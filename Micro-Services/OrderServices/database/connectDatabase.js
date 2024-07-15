const sql = require("mssql");

const config = {
  server: "localhost", 
  database: "orderDB",
  user: "younes",
  password: "hallamadrid2222",
  options: {
    trustServerCertificate: true, 
    enableArithAbort: true,
    encrypt: false 
  },
};

module.exports = {
  connect: () => sql.connect(config),
  sql,
};
