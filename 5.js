function evenSum(number) {
	if (number < 2) {
		return number;
	} else if (number === 2) {
		return 1;
	}

	var arrFibon = [1, 2];
	var bilFibon = arrFibon[0]+arrFibon[1];
	var counter = 2;
	while (bilFibon < number) {
		arrFibon.push(bilFibon);
		bilFibon = arrFibon[counter] + arrFibon[counter-1];
		counter++;
	}

	var sum = 0;
	arrFibon.forEach(function(n) {
		if (n % 2 === 0) {
			sum += n;
		}
	})

	return sum;

}

function oddSum(number) {
	if (number < 2) {
		return number;
	} else if (number === 2) {
		return 1;
	}

	var arrFibon = [1, 2];
	var bilFibon = arrFibon[0]+arrFibon[1];
	var counter = 2;
	while (bilFibon < number) {
		arrFibon.push(bilFibon);
		bilFibon = arrFibon[counter] + arrFibon[counter-1];
		counter++;
	}

	var sum = 0;
	arrFibon.forEach(function(n) {
		if (n % 2 !== 0) {
			sum += n;
		}
	})

	return sum;

}
