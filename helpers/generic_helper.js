const Helper = require('@codeceptjs/helper');
const fs = require('fs');
const locators = require('../locators');

class Generic extends Helper {
  async grabTextfromPage(string) {
    const remainingText = string.slice(string.indexOf(':') + 1).trim();
    const cleanedText = remainingText.replace(/\s+/g, ' ').trim();
    const trimmedText = cleanedText.split('Additional information')[0];
    const formattedText = trimmedText.replace(/([.!?])\s*(?=[A-Z])/g, '$1\n- ');
    const finalText = '- ' + formattedText;
    return finalText;
  }

  async checkElementExists(locator) {
    return Boolean(await this.helpers['Playwright'].grabNumberOfVisibleElements(locator));
  }

  async grabRequirementsText(title, fileName) {
    const { Playwright } = this.helpers;
    await Playwright.wait(2);
    const requirementsText = await Playwright.grabTextFrom(locators.textLocation);
    const finalText = await this.grabTextfromPage(requirementsText);
    fs.writeFileSync(fileName + '.txt', title + ': \n' + finalText + ' \n');
    console.log('Text is exported to: ' + fileName + '.txt');
  }

}

module.exports = Generic;
