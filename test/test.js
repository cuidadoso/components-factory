/**
 * Created by apyreev on 29-Mar-17.
 */
const assert = require('assert');
const mymodule = require('./mymodule.js');

describe('mymodule', () => {
  describe('#fun()', () => {
    it('должна приветствовать пользователя, имя которого передано как аргумент', () => {
      assert.equal(mymodule.fun('Сергей'), 'Привет, Сергей!');
    });
  });
});
