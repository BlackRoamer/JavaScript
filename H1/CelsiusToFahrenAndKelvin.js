function convertToFahren(tempInC) {
	var temp = tempInC * 1;
	var formula = temp * 1.8 + 32;
	return formula.toFixed(1) + ' F';
}

function convertToKelvin(tempInC) {
	var tempC = tempInC * 1;
	var formula = tempC + 273.15;
	return formula.toFixed(2) + ' K';
}