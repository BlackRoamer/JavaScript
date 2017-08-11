function testSpeed(input) {
	if (input.length < 1 || input === undefined) {
		return;
	}
	var speed = +input[0],
		area = input[1],
		cityLimit = 50,
		motorwayLimit = 130,
		interstateLimit = 90,
		residentalLimit = 20,
		overSpeeding = 20,
		overExcessiveSpeeding = 40,
		city = 'city',
		residential = 'residential',
		interstate = 'interstate',
		motorway = 'motorway',
		speeding = 'speeding',
		excessiveSpeeding = 'excessive speeding',
		recklessDriving = 'reckless driving';
	switch (area) {
		case city:
			if (speed > cityLimit) {
				if (speed <= cityLimit + overSpeeding) {
					console.log(speeding);
				} else if (speed <= cityLimit + overExcessiveSpeeding) {
					console.log(excessiveSpeeding);
				} else {
					console.log(recklessDriving);
				}
			}
			break;
		case residential:
			if (speed > residentalLimit) {
				if (speed <= residentalLimit + overSpeeding) {
					console.log(speeding);
				} else if (speed <= residentalLimit + overExcessiveSpeeding) {
					console.log(excessiveSpeeding);
				} else {
					console.log(recklessDriving);
				}
			}
			break;
		case interstate:
			if (speed > interstateLimit) {
				if (speed <= interstateLimit + overSpeeding) {
					console.log(speeding);
				} else if (speed <= interstateLimit + overExcessiveSpeeding) {
					console.log(excessiveSpeeding);
				} else {
					console.log(recklessDriving);
				}
			}
			break;
		case motorway:
			if (speed > motorwayLimit) {
				if (speed <= motorwayLimit + overSpeeding) {
					console.log(speeding);
				} else if (speed <= motorwayLimit + overExcessiveSpeeding) {
					console.log(excessiveSpeeding);
				} else {
					console.log(recklessDriving);
				}
			}
			break;
		default:
			return;
	}
}
testSpeed([70, 'city']);