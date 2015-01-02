describe('cylinderVolume', function () {
	it('can give a right answer', function () {
		answer = cylinderVolume(3,6);
		expect(Math.round(answer * 100) / 100).toBe(169.65);
	});
	it('should thrown a meaningful error on invalid input', function () {
		answer = cylinderVolume('fish',6);
		expect(answer).toBe('Please insert number');
	});
});

describe('coneVolume', function () {
	it('can give a right answer', function () {
		answer = coneVolume(3,6);
		expect(Math.round(answer * 100) / 100).toBe(56.55);
	});
	it('should thrown a meaningful error on invalid input', function () {
		answer = coneVolume('fish',6);
		expect(answer).toBe('Please insert number');
	});	
});

describe('sphereVolume', function () {
	it('can give a right answer', function () {
		answer = sphereVolume(3,6);
		expect(Math.round(answer * 100) / 100).toBe(113.1);
	});
	it('should thrown a meaningful error on invalid input', function () {
		answer = sphereVolume('fish',6);
		expect(answer).toBe('Please insert number');
	});	
});

describe('isNumeric', function () {
	it('returns true on numbers', function () {
		expect(isNumeric(5)).toBe(true);
	});
	it('returns true on numberic strings', function () {
		expect(isNumeric('5')).toBe(true);
	});
	it('returns false on non-numbers', function () {
		answer = coneVolume(3,6);
		expect(isNumeric('limburger')).toBe(false);
	});
	it('returns false on mixed strings', function () {
		answer = coneVolume(3,6);
		expect(isNumeric('limburger42')).toBe(false);
	});	
});