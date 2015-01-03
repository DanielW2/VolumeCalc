function calculateOut() {
	var shape = getDropBox();
	var radius = getInput('radius');
    var height = getInput('height');
    var output = document.getElementById('output');
	output.innerHTML = calcAnswer(shape, radius, height); 
}

function getDropBox(){
    var e = document.getElementById('shape');
    return e.options[e.selectedIndex].value;
}

function getInput(inputID) {
	return document.getElementById(inputID).value;
}