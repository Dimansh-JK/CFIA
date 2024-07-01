const fs = require('fs');
const locators = require('./locators');

module.exports = function () {
  return actor({
    getPath(fileName){
    return `./${fileName}.txt`;
  },
    
    openRequirementsPage() {
      this.amOnPage('https://inspection.canada.ca');
      this.click(locators.englishLanguageButton);
      this.click(locators.travellingRules);
      this.click(locators.travellingPets);
      this.click(locators.requirementsAnimals);
    },
    deleteTxtFile(fileName) {
      const filePath = this.getPath(fileName);
      if (fs.existsSync(filePath)) {
        const fileToDelete = filePath;
        fs.unlinkSync(fileToDelete);
      } else {
        fs.openSync(filePath, 'w');
      }
    },

    async openFile(fileName) {
      const { default: open } = await import('open');
      await open(this.getPath(fileName));
    },


  });
};
