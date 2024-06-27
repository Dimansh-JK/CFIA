const { I } = inject();
const fs = require('fs');
const locators = require('../locators'); // Импортируем локаторы

module.exports = {
  importRequirementsAdultPersonalDog() {
    I.click(locators.dropDownList1);
    I.selectOption(locators.dropDownList1, '+ Dog ');
    I.click(locators.pageBody);

    I.click(locators.dropDownList2);
    I.selectOption(
      locators.dropDownList2,
      '+ Personal (importing your personal pet – accompanied or unaccompanied by owner) '
    );
    I.click(locators.pageBody);

    I.click(locators.dropDownList3);
    I.selectOption(locators.dropDownList3, '+ 8 months or older ');
    I.click(locators.pageBody);

    I.click(locators.dropDownList4);
    I.selectOption(locators.dropDownList4, 'Other ');
    I.click(locators.pageBody);

    I.wait(3);
    I.click(locators.continueButton);
  },

  importRequirementsJuniorPersonalDog() {
    I.click(locators.dropDownList3);
    I.selectOption(locators.dropDownList3, '+ Older than 3 months but less than 8 months ');
    I.click(locators.pageBody);

    I.click(locators.dropDownList4);
    I.selectOption(locators.dropDownList4, '+ Yes ');
    I.click(locators.pageBody);

    I.click(locators.dropDownList5);
    I.selectOption(locators.dropDownList5, 'Other ');
    I.click(locators.pageBody);

    I.wait(3);
    I.click(locators.continueButton);
  },
};
