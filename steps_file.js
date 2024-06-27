const fs = require('fs');
const locators = require('./locators');

module.exports = function () {
  return actor({
    openRequirementsPage() {
      this.amOnPage('https://inspection.canada.ca');
      this.click(locators.englishLanguageButton);
      this.click(locators.travellingRules);
      this.click(locators.travellingPets);
      this.click(locators.requirementsAnimals);
    },
    deleteTxtFile(fileName) {
      if (fs.existsSync('./' + fileName + '.txt')) {
        const fileToDelete = './' + fileName + '.txt';
        fs.unlinkSync(fileToDelete);
      } else {
        fs.openSync('./' + fileName + '.txt', 'w');
      }
    },
  });
};
