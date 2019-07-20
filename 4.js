function arkaFood (harga, kode_promo, jarak, pajak) {
	// asumsi jarak dalam stuan kilometer
	if (kode_promo == "ARKAFOOD5") {
		if (harga >= 50000) {
			if (0.5 * harga > 50000) {
				harga -= 50000;
			} else {
				harga *= 0.5;
			}
		}
	} else if (kode_promo == "DITRAKTIRDEMY") {
		if (harga >= 25000) {
			if (0.6 * harga > 30000) {
				harga -= 30000;
			} else {
				harga *= 0.4;
			}
		}
	} 

	if (jarak <= 1.5) {
		harga += 5000;
	} else {
		harga += (5000 + Math.ceil(jarak-1.5)*3000);
	}

	if (pajak == true) {
		harga = 0.05 * harga;
	}

	return "Rp. " + harga;
}