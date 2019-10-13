const assert = require('assert')

describe('webdriver.io page', () => {
  it('does few things', () => {
      browser.url('http://localhost:3001/')
      const title = browser.getTitle()
      assert.strictEqual(title, 'React App')   

      assert.strictEqual($('#root').getText().includes('...loading dog...'), true);

      browser.waitUntil(() => {
        return $('#root button').isExisting()
      }, 5000, 'expected button to show up in 5 seconds');

      $('#root button').click();

      assert.strictEqual($('#root').getText().includes('...loading users...'), true);

      browser.waitUntil(() => {
        return $('#root').getText().includes('catchPhrase')
      }, 5000, 'expected to have catchPhrase');      
  })
})
