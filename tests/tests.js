var assert = chai.assert;

suite('operation-suma', function() {
	setup(function() {
		if (typeof __html__ !== 'undefined') {
			document.body.innerHTML = __html__['tests/index.html'];
			original = document.getElementById('original');
			operated = document.getElementById('operated');
		}
	});
	
	test('2+3', function() {
		original.value = '2+3';
		main();
		assert.equal(operated, 5);
	});
	
	test('2e2+3.4', function() {
		original.value = '2e2+3.4';
		main();
		assert.equal(operated, 203.4);
	});
});
