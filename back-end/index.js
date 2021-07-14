const express = require("express");
const dbClient = require("./src/Service/mongoConnection");
const battleController = require("./src/Controller/battleController");
const cors = require("cors");
const app = express();
app.use(cors());
dbClient.getDBClient().then(() => "Connected to DB!");

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/list", async (req, res) => {
  const result = await battleController.getBattlesList();
  const listOfBattles = result.map((data) => {
    return data.name;
  });
  return res.json({ data: listOfBattles });
});

app.get("/all", async (req, res) => {
  const result = await battleController.getAllBattles();
  return res.json({ data: result });
});

app.get("/count", async (req, res) => {
  const result = await battleController.getBattlesCount();
  return res.send({ count: result });
});

app.get("/search", async (req, res) => {
  const queries = req.query;
  console.log(queries);
  const result = await battleController.searchBattles(queries);
  return res.send({ count: result });
});
