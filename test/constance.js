
var assert = require('assert');
var constance = require('..');

describe('constance()', function() {
	it('should key mirror for a plain object', function() {
		var objConsts = constance({
			'key1': null,
			'key2': null
		});
		var arrConsts = constance(['key1', 'key2']);
		var outConsts = {
			'key1': 'key1',
			'key2': 'key2'
		};
		assert.deepEqual(objConsts, outConsts);
		assert.deepEqual(arrConsts, outConsts);
	});
	it('should key mirror with prefix for prefix and object', function() {
		var prefix = "pre_";
		var objConsts = constance(prefix, {
			'key1': null,
			'key2': null
		});
		var arrConsts = constance(prefix, ['key1', 'key2']);
		var outConsts = {
			'key1': prefix+'key1',
			'key2': prefix+'key2'
		};
		assert.deepEqual(objConsts, outConsts);
		assert.deepEqual(arrConsts, outConsts);
	});
	it('should key mirror with postfix for object and postfix', function() {
		var postfix = "_post";
		var objConsts = constance({
			'key1': null,
			'key2': null
		}, postfix);
		var arrConsts = constance(['key1', 'key2'], postfix);
		var outConsts = {
			'key1': 'key1'+postfix,
			'key2': 'key2'+postfix
		};
		assert.deepEqual(objConsts, outConsts);
		assert.deepEqual(arrConsts, outConsts);
	});
	it('should key mirror with prefix and postfix for prefix, object, and postfix', function() {
		var prefix = "pre_";
		var postfix = "_post";
		var objConsts = constance(prefix, {
			'key1': null,
			'key2': null
		}, postfix);
		var arrConsts = constance(prefix, ['key1', 'key2'], postfix);
		var outConsts = {
			'key1': prefix+'key1'+postfix,
			'key2': prefix+'key2'+postfix
		};
		assert.deepEqual(objConsts, outConsts);
		assert.deepEqual(arrConsts, outConsts);
	});
});
