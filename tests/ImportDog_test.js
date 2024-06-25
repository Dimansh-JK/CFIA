Feature('Import of Animals');

Before(({ I }) => {
  I.openRequirementsPage();
});

Scenario('Dogs Import', async ({I, travelPage}) => {
  travelPage.importRequirementsAdultPersonalDog();
  await travelPage.verifyTextIsAvailable();
  travelPage.grabRequirementsText();
}).tag('dog');
