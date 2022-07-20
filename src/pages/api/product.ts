// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sqlite, { open } from "sqlite";
import sqlite3 from "sqlite3";

async function openDb() {
  return open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });
}

export default async function getAllProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const db = await openDb();
    const products = await db.all("SELECT * FROM Product");
    res.status(200).json(products);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
