Feature('Import of Animals');

Before(({ I }) => {
  I.deleteTxtFile('importRequirementsDog');
  I.openRequirementsPage();
});

Scenario('Dogs Import', async ({ I, travelPage }) => {
  travelPage.importRequirementsAdultPersonalDog();
  I.verifyTextIsAvailable();
  await I.grabRequirementsText(
    'For adult dogs with non-commercial import, when you arrive in Canada you will need the following',
    'importRequirementsDog'
  );

  travelPage.importRequirementsJuniorPersonalDog();
  I.verifyTextIsAvailable();
  await I.grabRequirementsText(
    'For junior (3-8 mo) dogs with non-commercial import, when you arrive in Canada you will need the following',
    'importRequirementsDog'
  );
  
  travelPage.importRequirementsPuppyPersonalDog();
  I.verifyTextIsAvailable();
  await I.grabRequirementsText(
    'For dog puppies (below 3 mo) with non-commercial import, when you arrive in Canada you will need the following',
    'importRequirementsDog'
  );
}).tag('dog');

AfterSuite(async ({ I }) => {
  await I.openFile('importRequirementsDog');
});