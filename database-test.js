const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function openDb() {
  return sqlite.open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate({
    migrationsPath: "./migrations",
    force: "last",
  });
  //   const products = await db.all("SELECT * FROM product");
  //   console.log("All Products: ", JSON.stringify(products, null, 2));

  console.log("DB Running 🚀");
}

setup();
