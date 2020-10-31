const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === true) {
    let arrayWithFirstLetters = [];
    for ( let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        let nameToUpperCase = members[i].toUpperCase();
        let nameWithoutSpace = nameToUpperCase.split(' ').join('');
        arrayWithFirstLetters.push(nameWithoutSpace[0]);
      }
    }
    const arrayOfTeam = arrayWithFirstLetters.sort();
    return arrayOfTeam.join('');
  } else return false;
};
