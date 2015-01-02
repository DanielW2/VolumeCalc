function cylinderVolume (r, h) {
	if (isNumeric(r) && isNumeric(h)) {
		return Math.round(Math.PI * Math.pow(r,2) * h*100)/100;
	}
	else {
		return 'Please insert number';
	}
}

function coneVolume (r, h) {
	if (isNumeric(r) && isNumeric(h)) {
		return Math.round(cylinderVolume(r,h)/3*100)/100;
	}
	else {
		return 'Please insert number';
	}	
}

function sphereVolume (r, h) {
	if (isNumeric(r) && isNumeric(h)) {
		return Math.round((Math.PI * Math.pow(r,3)) * (4/3) * 100)/100;
	}
	else {
		return 'Please insert number';
	}	
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function calcAnswer(shape, r, h) {
	switch (shape) {
		case 'cylinder':
			return cylinderVolume(r, h);
		case 'cone':
			return coneVolume(r, h);
		case 'sphere':
			return sphereVolume(r, h);
		default:
			return 'Please pick a shape';
	}
}