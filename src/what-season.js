const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const season = ["winter", "spring", "summer", "autumn"];

  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  let month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) {
    return season[0];
  } else if (month > 1 && month < 5) {
    return season[1];
  } else if (month > 4 && month < 8) {
    return season[2];
  } else if (month > 7 && month < 11) {
    return season[3];
  }
};
