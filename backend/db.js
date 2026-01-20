const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.getConnection((err, conn) => {
  if (err) console.log("DB Error:", err.message);
  else {
    console.log("MySQL connected successfully!");
    conn.release();
  }
});

module.exports = db;
