'use strict'
const assert = require('assert')

module.exports = () => {

  describe('First Task', () => {
    it('takes a screenshot of a subpage', () => {
      return browser
        .url(`https://www.chase.com/`)
        .waitForExist(`.carousel--custom-pager__item-inner[href*="slide1"]`, 20000)
        .click(`.carousel--custom-pager__item-inner[href*="slide1"]`)
        .waitForExist(`.ZipGateHeader`)
        .screenshot();
    })
  })

}
