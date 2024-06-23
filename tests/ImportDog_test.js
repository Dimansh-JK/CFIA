Feature('Import of Animals');

Scenario('Dogs Import', ({ I }) => {
  I.amOnPage('https://inspection.canada.ca/en');
  //basePage.clickMyAccount();
}).tag('dog');
