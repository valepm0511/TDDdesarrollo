const assert = require('chai').assert;
global.window = global;
//enlaza el archivo
require('../src/js/validate.js');
//describir lo que se debe verificar, describe un texto y una funcion
describe('validar emails', () => {
	describe('verificar si existe el @', () => {
		it('deberia tener solo un @ ', () => {
			assert.equal(validateEmail('example@email.com'), true);
			assert.equal(validateEmail('example@@email.com'), false);
			assert.equal(validateEmail('exampleemail.com'), false);
		});
		it('deberia tener un @ antes de un dominio', () => {
			assert.equal(validateEmail('@email.com'),true);
			assert.equal(validateEmail('email.@com'),false);
		});
	});
	(describe('verificar si hay un dominio', () => {
		it('dberia tener un punto y caracteres del alfabeto', () => {
			assert.equal(validateEmail('example@email'), false);
			assert.equal(validateEmail('example@email.'), false);
		});
	}));
	
	describe('verificar que no tenga caracteres raros', () => {

	});
	(describe('verificar que tenga al menos 1 caracter antes del @', () => {

	}));
	
});