import express from "express";
import connection from "./db/connection.js";
import mongoose from "mongoose";
import Characters from "./models/Character.js";
import Seasons from "./models/Season.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    characters: "/characters",
    seasons: "/seasons"
  });
});

app.get("/characters", (req, res) => {
  Characters.find({}).then((character) => {
    res.json(character);
  });
});

app.get("/characters/:id", (req, res) => {
  Characters.findById(req.params.id).then(character => {
    res.json(character)
  })
});

app.post("/characters", (req, res) => {
  Characters.create(req.body).then(character => {
    res.json(character)
  })
})

app.get("/seasons", (req, res) => {
  Seasons.find({}).then((season) => {
    res.json(season)
  })
})

app.get("/seasons/:id", (req, res) => {
  Seasons.findById(req.params.id).then(season => {
    res.json(season)
  })
});

app.listen(3000, () => console.log("Hello!"));