import mongoose from "mongoose";
import connection from "../db/connection.js";
import charactersData from "./characters.json" assert { type: "json" };
import Characters from "../models/Character.js";
import Seasons from "../models/Season.js";
import seasonsData from "./seasons.json" assert {type: "json"}

Characters.deleteMany({})
  .then(() => Characters.create(charactersData))
  .then(() => console.log("done"))
  .then(() => mongoose.disconnect())
  .catch((err) => console.log("Error", err));


Seasons.deleteMany({})
  .then(() => Seasons.create(seasonsData))
  .then(() => console.log("done"))
  .then(() => mongoose.disconnect())
  .catch((err) => console.log("Error", err))