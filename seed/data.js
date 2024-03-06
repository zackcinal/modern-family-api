import mongoose from "mongoose";
import connection from "../db/connection.js";
import charactersData from "./characters.json" assert { type: "json" };
import Characters from "../models/Character.js";
import Seasons from "../models/Season.js";
import seasonsData from "./seasons.json" assert { type: "json" };
import Quotes from "../models/Quote.js";
import quotesData from "./quotes.json" assert { type: "json" };

const insertData = async () => {
  await Characters.deleteMany({});
  await Characters.create(charactersData);

  await Seasons.deleteMany({});
  await Seasons.create(seasonsData);

  await Quotes.deleteMany({});
  await Quotes.create(quotesData);

  await connection.close();
};

insertData();
