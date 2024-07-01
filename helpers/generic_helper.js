const Helper = require('@codeceptjs/helper');
const fs = require('fs');
const locators = require('../locators');
const { assert } = require('console');

class Generic extends Helper {
  async cleanupTextStringfromPage(string) {
    const remainingText = string.slice(string.indexOf(':') + 1).trim();
    const cleanedText = remainingText.replace(/\s+/g, ' ').trim();
    const trimmedText = cleanedText.split('Additional information')[0];
    const formattedText = trimmedText.replace(/([.!?])\s*(?=[A-Z])/g, '$1\n- ');
    const finalText = '- ' + formattedText;
    return finalText;
  }

  async checkElementExists(locator) {
    const { Playwright } = this.helpers;
    await Playwright.wait(2);
    return Boolean(await Playwright.grabNumberOfVisibleElements(locator));
  }

  async extractAndSaveRequirements(title, fileName) {
    const { Playwright } = this.helpers;
    await Playwright.waitForElement(locators.requirementText);
    const requirementsText = await Playwright.grabTextFrom(locators.textLocation);
    const finalText = await this.cleanupTextStringfromPage(requirementsText);
    fs.appendFileSync(fileName + '.txt', title + ': \n' + finalText + ' \n \n');
    console.log('Text is exported to: ' + fileName + '.txt');
  }
}

module.exports = Generic;
