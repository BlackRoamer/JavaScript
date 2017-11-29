 function calculate(numbers) {
 	var a, b, c, formulaD, xFormulaDoubleRoot, formula1, formula2, result;
 	a = numbers[0] * 1;
 	b = numbers[1] * 1;
 	c = numbers[2] * 1;
 	formulaD = Math.sqrt((b * b) - (4 * a * c));

 	if (!formulaD && formulaD !== 0) {
 		console.log('no real roots');
 	} else if (formulaD === 0) {

 		xFormulaDoubleRoot = (-b) / (2 * a);
 		console.log('x1=x2=' + xFormulaDoubleRoot.toFixed(2));
 	} else {
 		formula1 = ((-b + formulaD) / (2 * a));
 		formula2 = ((-b - formulaD) / (2 * a));
 		if (formula1 > formula2) {
 			result = 'x1=' + formula1.toFixed(2) + '; x2=' + formula2.toFixed(2);
 		}
 		result = 'x1=' + formula2.toFixed(2) + '; x2=' + formula1.toFixed(2);
 		console.log(result);
 	}
 }