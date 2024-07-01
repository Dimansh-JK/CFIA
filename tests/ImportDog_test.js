Feature('Import of Animals');
const { assert } = require('chai');
const locators = require('../locators');
const dogImportRequirements = [
  {
    dogAge: 'Adult',
    title: 'For adult dogs with non-commercial import, when you arrive in Canada you will need the following',
    fileName: 'importRequirementsDog',
  },
  {
    dogAge: 'Junior',
    title: 'For junior (3-8 mo) dogs with non-commercial import, when you arrive in Canada you will need the following',
    fileName: 'importRequirementsDog',
  },
  {
    dogAge: 'Puppy',
    title:
      'For dog puppies (below 3 mo) with non-commercial import, when you arrive in Canada you will need the following',
    fileName: 'importRequirementsDog',
  },
];

BeforeSuite(({ I }) => {
  I.deleteTxtFile('importRequirementsDog');
});

Before(async ({ I }) => {
  await I.openRequirementsPage();
});

Data(dogImportRequirements)
  .Scenario('Dogs Import', async ({ I, travelPage, current }) => {
    travelPage.selectDogImportRequirements(current.dogAge);
    assert.isTrue(await I.checkElementExists(locators.textLocation));
    await I.extractAndSaveRequirements(current.title, current.fileName);
  })
  .tag('dog');

AfterSuite(async ({ I }) => {
  await I.openFile('importRequirementsDog');
});
