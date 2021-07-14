let mongoose = require("mongoose");
let battleSchema = new mongoose.Schema(
  {
    name: String,
    year: Number,
    attacker_king: String,
    defender_king: String,
    attacker_1: String,
    defender_1: String,
    battle_type: String,
    attacker_outcome: String,
    attacker_commander: String,
    defender_commander: String,
    major_death: Number,
    major_capture: Number,
    defender_size: Number,
    year: Number,
    location: String,
    region: String,
  }
);
module.exports = mongoose.model("battles", battleSchema);
