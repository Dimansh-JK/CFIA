englishLanguageButton = { xpath: '//a[text()="English"]' };
travellingRules = { xpath: '//a[text()="Travelling with pets, food or plants"]' };
travellingPets = { xpath: '//a[text()="Travelling with pets"]' };
requirementsAnimals = { xpath: '//a[text()="Requirements for bringing an animal into Canada"]' };
const fs = require('fs');

module.exports = function() {
  return actor({
    openRequirementsPage(){
      this.amOnPage('https://inspection.canada.ca');
      this.click(englishLanguageButton);
      this.click(travellingRules);
      this.click(travellingPets);
      this.click(requirementsAnimals);
    },
    deleteTxtFile(fileName) {
      const fileToDelete = './' + fileName + '.txt';
      fs.unlinkSync(fileToDelete);
    },


  });
}
