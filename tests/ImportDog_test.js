Feature('Import of Animals');

Before(({ I }) => {
  I.openRequirementsPage();
});

Scenario('Dogs Import', ({ I, travelPage }) => {
  travelPage.importRequirements();
  travelPage.grabRequirementsText();
  pause();
}).tag('dog');
