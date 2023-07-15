const fs = require("fs");
const mysql = require("mysql2");
const dbConfig = require("./app/config/db.config.js");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
    return;
  }

  const operations = [];

  operations.push(fs.readFileSync("./app/migrations/createTable.sql", "utf8"));
  operations.push(fs.readFileSync("./app/migrations/insertTable.sql", "utf8"));

  operations.forEach(it => {
    connection.query(it, (error, results) => {
      if (error) {
        console.error("Error executing SQL queries:", error);
        return;
      }
      connection.end((error) => {
        if (error) {
          console.error("Error closing the database connection:", error);
          return;
        }
        console.log("Database connection closed.");
      });
    });
  })
});
