Feature('Import of Animals');

Before(({ I }) => {
  I.openRequirementsPage();
});

Scenario('Dogs Import', async ({I, travelPage}) => {
  travelPage.importRequirementsAdultPersonalDog();
  await travelPage.verifyTextIsAvailable();
  travelPage.grabRequirementsText(
    'For adult dogs with non-commercial import, when you arrive in Canada you will need the following',
    'importRequirementsDog');
}).tag('dog');
