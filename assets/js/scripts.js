function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'ON';
	const darkMode = 'OFF';
    const lightHum = 'Light mode';
    const DarkHum = 'Dark mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = DarkHum;
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightHum;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);

// var assert = require('assert');

// // Retorna o valor de delta

// var delta = function(a, b, c) {

//   return b * b -4 * a * c;

// }

// // Retorna o valor da primeira raiz

// var raiz1 = function(a, b, c) {

//   return (-b + Math.sqrt(delta(a, b, c))) / 2 * a;

// }

// // Retorna o valor da segunda raiz

// var raiz2 = function(a, b, c) {

//   return (-b - Math.sqrt(delta(a, b, c))) / 2 * a;

// }

// //

// // Testes

// //

// try {

//   var a = 1; b = 0; c = -16;

//   assert.equal(64, delta(a, b, c));

//   assert.equal(4, raiz1(a, b, c));

//   assert.equal(-4, raiz2(a, b, c));

// } catch(e) {

//   XPTO2.log(e);

// }

