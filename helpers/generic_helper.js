const Helper = require('@codeceptjs/helper');

class Generic extends Helper {
  async grabTextfromPage(string) {
    const cleanedText = string.replace(/\s+/g, ' ').trim();
    const trimmedText = cleanedText.split('Additional information')[0];
    const finalText = trimmedText.charAt(0).toLowerCase() + trimmedText.slice(1);
    return finalText;
  }

  async checkElementExists(locator) {
    return Boolean(await this.helpers['Playwright'].grabNumberOfVisibleElements(locator));
  }
  
}

module.exports = Generic;
