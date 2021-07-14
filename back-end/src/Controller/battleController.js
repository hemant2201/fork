const Model = require("../Model/index");

const getBattlesList = async () => {
  const len = await Model.Battle.find().exec();
  return len;
};

const getBattlesCount = async () => {
  const len = await Model.Battle.countDocuments();
  return len;
};

const searchBattles = async (queryData) => {
  const king = queryData.king;
  const battleLocation = queryData.location;
  if (king && battleLocation) {
    const desiredDocs = await Model.Battle.find({
      $and: [
        { $or: [{ attacker_king: king }, { defender_king: king }] },

        { location: battleLocation },
      ],
    });
    return desiredDocs;
  } else if (!king && battleLocation) {
    const desiredDocs = await Model.Battle.find({
      location: battleLocation,
    });
    return desiredDocs;
  } else if (king && !battleLocation) {
    const desiredDocs = await Model.Battle.find({
      $or: [{ attacker_king: king }, { defender_king: king }],
    });
    return desiredDocs;
  }
};

const getAllBattles = async () => {
  const len = await Model.Battle.find().exec();
  return len;
};

module.exports = {
  getBattlesList: getBattlesList,
  getBattlesCount: getBattlesCount,
  searchBattles: searchBattles,
  getAllBattles: getAllBattles,
};
