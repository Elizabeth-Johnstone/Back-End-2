const houses = require("./db.json");

const globalId = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },

  deleteHouse: (req, res) => {
    let index = houses.findIndex(elem => elem.id === +req.params.id)
    houses.splice(index, 1)
    res.status(200).send(houses)
  },

  createHouse: (req, res) => {
    let newHouse = {
        id:
    }

  },

  updateHouse: (req, res) => {},
};
