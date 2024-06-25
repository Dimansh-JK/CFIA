const Helper = require('@codeceptjs/helper');

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

}

module.exports = Generic;
