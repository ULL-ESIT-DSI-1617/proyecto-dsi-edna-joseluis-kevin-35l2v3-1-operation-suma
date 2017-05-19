var assert = chai.assert;

suite('operation-suma', function() {
	test('2+3', function() {
		original.value = '2+3';
		main();
		assert.equal(operated.innerHTML, 5);
	});
	
	test('2e2+3.4', function() {
		original.value = '2e2+3.4';
		main();
		assert.equal(operated.innerHTML, 203.4);
	});
});
