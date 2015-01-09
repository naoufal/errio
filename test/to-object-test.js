var SuperError = require('super-error');
var Errio = require('..');

var common = require('./common');

describe('toObject', function() {
  it('serializes name and message');

  describe('with option overrides', function() {
    it('sets recursive option');
    it('sets inherited option');
    it('sets stack option');
    it('sets private option');
    it('sets exclude option');
    it('sets include option');
  });

  describe('with unregistered error class', function() {
    it('registers error class with option overrides');
  });
});
