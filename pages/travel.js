const { I } = inject();

module.exports = {
  pageBody: { xpath: '/html/body/div' },
  typeOfAnimal: { xpath: '//*[@id="wb-auto-31"]' },
  purposeEnter: { xpath: '//*[@id="wb-auto-38"]' },
  ageEnter: { xpath: '//*[@id="wb-auto-45"]' },
  countryEnter: { xpath: '//*[@id="wb-auto-60"]' },
  continueButton: { xpath: '//input[@type="submit"]' },
  textLocation: {xpath: '//div[@class="well"]'},

  importRequirements() {
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

  async grabRequirementsText() {
    const requirementsText = await I.grabTextFrom(this.textLocation);
    console.log(requirementsText);
  },
};
