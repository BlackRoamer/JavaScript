 function isPrime(num) {
 	var prime = true;
 	if (num <= 0 && num >= 100) {
 		prime = false;
 	} else {
 		var i;
 		for (i = 2; i < num; i += 1) {
 			if (num % i === 0) {
 				prime = false;
 			}
 		}
 	}
 	return prime;

 }
 console.log(isPrime('4'));