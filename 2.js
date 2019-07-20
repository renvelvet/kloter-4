function is_username_valid(username) {
// 	Format username : merupakan kombinasi dari huruf kecil,
// huruf besar dan angka dengan panjang 5-9 karakter. Username
// tidak boleh diawali dengan angka / karakter special.
	const validation = /[a-zA-Z][a-zA-Z0-9]{5,9}/;
	return validation.test(username);
}

function is_password_valid(password) {
// Format password : merupakan kombinasi dari huruf kecil,
// huruf besar minimal satu karakter, angka minimal satu karakter,
// dan karakter spesial minimal satu karakter dan harus memiliki
// karakter simbol “=” dan panjang minimal 8 karakter.
	const validation = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[!@#\$%\^&])(?=.[=])/;
	return validation.test(password);
}
