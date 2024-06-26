const { I } = inject();
const fs = require('fs');
const locators = require('../locators'); // Импортируем локаторы


module.exports = {

  importRequirementsAdultPersonalDog() {
    I.click(locators.typeOfAnimal);
    I.selectOption(locators.typeOfAnimal, '+ Dog ');
    I.click(locators.pageBody);

    I.click(locators.purposeEnter);
    I.selectOption(
      locators.purposeEnter,
      '+ Personal (importing your personal pet – accompanied or unaccompanied by owner) '
    );
    I.click(locators.pageBody);

    I.click(locators.ageEnter);
    I.selectOption(locators.ageEnter, '+ 8 months or older ');
    I.click(locators.pageBody);

    I.click(locators.countryEnter);
    I.selectOption(locators.countryEnter, 'Other');
    I.click(locators.pageBody);

    I.wait(3);
    I.click(locators.continueButton);
  },

  async verifyTextIsAvailable() {
    I.waitForVisible(locators.textLocation);
    const textExists = await I.checkElementExists(locators.textLocation);
    if (!textExists) {
      throw new Error('Text is not available on the page');
    }
  },

};
