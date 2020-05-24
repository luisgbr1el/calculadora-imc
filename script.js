function imc() {
	var peso = parseFloat(document.getElementById('peso').value);
	var alt = parseFloat(document.getElementById('alt').value);
	var imc = peso / (alt * alt)

	var resul = document.getElementById('resul').innerHTML = "Resultado: " + imc;

	if (imc <= 18.5) {
	var cond = document.getElementById('cond').innerHTML = "Condição: Abaixo do peso";	
	}
	if (imc >= 18.6 && imc <= 24.9) {
		var cond = document.getElementById('cond').innerHTML = "Condição: Peso ideal";
	}
	if (imc >= 25 && imc <= 29.9) {
		var cond = document.getElementById('cond').innerHTML = "Condição: Levemente acima do peso";
	}
	if (imc >= 30 && imc <= 34.9) {
		var cond = document.getElementById('cond').innerHTML = "Condição: Obesidade grau I";
	}
	if (imc >= 35 && imc <= 39.9) {
		var cond = document.getElementById('cond').innerHTML = "Condição: Obesidade grau II (severa)";
	}
	if (imc >= 40) {
		var cond = document.getElementById('cond').innerHTML = "Condição: Obesidade grau III (mórbida)";
	}
}
