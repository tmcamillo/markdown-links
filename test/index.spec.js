/* eslint-disable */

const assert = require('chai').assert;
const returnGetLinks = require('../index');

describe('returnGetLinks()', () => {
    it('special characters will be remove and must return true', () => {
    	assert.equal(returnsValidatorCard('5234.2152.4626.0328'), true);
    });
});