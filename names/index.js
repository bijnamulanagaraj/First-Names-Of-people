const peopleNames = require("../country/state/city/index.js");

const getPeopleNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleNames) => {
  return getPeopleNames(peopleNames);
};

module.exports = getPeopleInCity;
