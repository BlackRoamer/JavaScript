// OPTIMIZED
function parseTagsOptimezed(str) {
	if (str === undefined) {
		return;
	}
	var regexUp = /(<upcase>)+(.*?)(<\/upcase>)+/,
		regexLow = /(<lowcase>)+(.*?)(<\/lowcase>)+/,
		regexOriginal = /(<orgcase>)+(.*?)(<\/orgcase>)+/,
		match = regexUp.exec(str),
		match1 = regexLow.exec(str),
		match2 = regexOriginal.exec(str);
	while (match !== null) {
		str = str.replace(match[0], match[2].toUpperCase());
		match = regexUp.exec(str);
	}
	while (match1 !== null) {
		str = str.replace(match1[0], match1[2].toLowerCase());
		match1 = regexLow.exec(str);
	}
	while (match2 !== null) {
		str = str.replace(match2[0], match2[2]);
		match2 = regexOriginal.exec(str);
	}
	console.log(str);
}
parseTagsOptimezed('We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anyThing</lowcase> else.');

//1st try 
function parseTags(str) {
	if (str === undefined) {
		return;
	}
	var len1,
		len2,
		len3,
		i,
		j,
		k,
		finalResult,
		resultUp = '',
		resultLow = '',
		resultOrg = '',
		regexUp = /(<upcase>)+(.*?)(<\/upcase>)+/g,
		regexUpT = /(<upcase>)+(.*?)(<\/upcase>)+/,
		regexLow = /(<lowcase>)+(.*?)(<\/lowcase>)+/g,
		regexLowT = /(<lowcase>)+(.*?)(<\/lowcase>)+/,
		regexOriginal = /(<orgcase>)+(.*?)(<\/orgcase>)+/g,
		regexOriginalT = /(<orgcase>)+(.*?)(<\/orgcase>)+/;


	resultUp = str.match(regexUp).map(function(val) {
		val = regexUp.exec(str);
		return val[2].toUpperCase();
	});

	resultLow = str.match(regexLow).map(function(val) {
		val = regexLow.exec(str);
		return val[2].toLowerCase();
	});
	resultOrg = str.match(regexOriginal).map(function(val) {
		val = regexOriginal.exec(str);
		return val[2];
	});
	finalResult = str;
	len1 = resultUp.length;
	for (i = 0; i < len1; i += 1) {
		finalResult = finalResult.replace(regexUpT, resultUp[i]);
	}
	len2 = resultOrg.length;
	for (k = 0; k < len2; k += 1) {
		finalResult = finalResult.replace(regexOriginalT, resultOrg[k]);
	}
	len3 = resultLow.length;
	for (j = 0; j < len3; j += 1) {
		finalResult = finalResult.replace(regexLowT, resultLow[j]);
	}

	console.log(finalResult);

}
parseTags('We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.');