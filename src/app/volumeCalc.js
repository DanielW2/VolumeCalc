function cylinderVolume (r,h) {
	if (isNumeric(r) && isNumeric(h)) {
		return Math.PI * Math.pow(r,2) * h;
	}
	else {
		return 'Please insert number';
	}
}

function coneVolume (r,h) {
	if (isNumeric(r) && isNumeric(h)) {
		return cylinderVolume(r,h)/3;
	}
	else {
		return 'Please insert number';
	}	
}

function sphereVolume (r,h) {
	if (isNumeric(r) && isNumeric(h)) {
		return (Math.PI * Math.pow(r,3)) * (4/3);
	}
	else {
		return 'Please insert number';
	}	
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}