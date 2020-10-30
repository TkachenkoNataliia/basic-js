const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof sampleActivity === String) && (sampleActivity > 0) && (sampleActivity < 15)) {
    const sampleActivityToNumber = Number(sampleActivity);
    const result = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivityToNumber)) / (0.693 / HALF_LIFE_PERIOD));
    return result;
  } else return false;
};
