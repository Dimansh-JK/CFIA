englishLanguageButton = { xpath: '//a[text()="English"]' };
travellingRules = { xpath: '//a[text()="Travelling with pets, food or plants"]' };
travellingPets = { xpath: '//a[text()="Travelling with pets"]' };
requirementsAnimals = { xpath: '//a[text()="Requirements for bringing an animal into Canada"]' };

module.exports = function() {
  return actor({
    openRequirementsPage(){
      this.amOnPage('https://inspection.canada.ca');
      this.click(englishLanguageButton);
      this.click(travellingRules);
      this.click(travellingPets);
      this.click(requirementsAnimals);
}


  });
}
