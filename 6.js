function mrBrulee(jenis_operasi, N, array_digit) {
	var str_of_number = "";
	for (var i = 1; i <= N; i++) {
		str_of_number += i;
	}

	var array_of_number = str_of_number.split("");
	var retval = 0;
	switch (jenis_operasi) {
		case "SUM": {
			for (var i = 0; i < array_digit.length; i++) {
				retval += parseInt(array_of_number[array_digit[i]]);
			}
			
		}
		case "MUL": {
			for (var i = 0; i < array_digit.length; i++) {
				retval *=parseInt(array_of_number[array_digit[i]]);
			}
			
		}
		case "SUB": {
			for (var i = 0; i < array_digit.length; i++) {
				retval -=parseInt(array_of_number[array_digit[i]]);
			}
			
		}
		case "DIV": {
			for (var i = 0; i < array_digit.length; i++) {
				retval /= parseInt(array_of_number[array_digit[i]]);
			}
		}
	}

	return retval;
}