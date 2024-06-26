const { I } = inject();
const fs = require('fs');

module.exports = {
  pageBody: { xpath: '/html/body/div' },
  typeOfAnimal: { xpath: '//*[@id="wb-auto-31"]' },
  purposeEnter: { xpath: '//*[@id="wb-auto-38"]' },
  ageEnter: { xpath: '//*[@id="wb-auto-45"]' },
  countryEnter: { xpath: '//*[@id="wb-auto-60"]' },
  continueButton: { xpath: '//input[@type="submit"]' },
  textLocation: { xpath: '//div[@class="well"]' },

  importRequirementsAdultPersonalDog() {
    I.click(this.typeOfAnimal);
    I.selectOption(this.typeOfAnimal, '+ Dog ');
    I.click(this.pageBody);

    I.click(this.purposeEnter);
    I.selectOption(
      this.purposeEnter,
      '+ Personal (importing your personal pet – accompanied or unaccompanied by owner) '
    );
    I.click(this.pageBody);

    I.click(this.ageEnter);
    I.selectOption(this.ageEnter, '+ 8 months or older ');
    I.click(this.pageBody);

    I.click(this.countryEnter);
    I.selectOption(this.countryEnter, 'Other');
    I.click(this.pageBody);

    I.wait(3);
    I.click(this.continueButton);
  },

  async verifyTextIsAvailable() {
    I.waitForVisible(this.textLocation);
    const textExists = await I.checkElementExists(this.textLocation);
    if (!textExists) {
      throw new Error('Text is not available on the page');
    }
  },

  async grabRequirementsText(title, fileName) {
    I.wait(2);
    const requirementsText = await I.grabTextFrom(this.textLocation);
    const finalText = await I.grabTextfromPage(requirementsText);
    fs.writeFileSync(fileName + '.txt', title + ': \n' + finalText + ' \n', (err) => {
      if (err) throw err;
    });
    console.log('Text is exported to: '+fileName + '.txt');
  },
};
