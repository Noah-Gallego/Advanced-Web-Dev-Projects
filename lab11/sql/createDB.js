const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./data/app.db";

// YOU run this file using the command:
//    node createDB.js
// This will create the app.db file with a user table in it

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createTable(db);
    });
    console.log("Opened DB Connection");
    return db;
  }
}

function createTable(db) {
  db.exec(`
    CREATE TABLE user(
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(50) NOT NULL
    );
  `);
  console.log("user Table Created");
}

createDbConnection();
