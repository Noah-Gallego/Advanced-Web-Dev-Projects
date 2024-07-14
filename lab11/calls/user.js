const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./sql/data/app.db";

function openDB() {
  const db = new sqlite3.Database(filepath, (err) => {
    if(err) {
      return console.error(err.message);
    }
  });
  console.log("Opened DB Connection");
  return db;
}

function closeDB(db) {
  db.close((err) => {
    if(err) {
      return console.error(err.message);
    }
  });
  console.log("Closed DB Connection");
}

exports.create = function (params) {
  console.log("Running user.create()");

  if (!params.name || !params.password) {
    return { error: "Missing name or password" };
  }

  return new Promise((resolve, reject) => {
    bcrypt.hash(params.password, 10, (err, hash) => {
      const db = openDB();
      const stmt = db.prepare("INSERT INTO users (name, password) VALUES (?, ?)", params.name, hash);
      stmt.run().finalize();
      closeDB(db);

      const validPassword = bcrypt.compareSync(params.password, hash);
      resolve({ name: params.name, password: hash, validPassword: validPassword });
    });
  });
};
