"use strict";

(function (operations){
	/**
	* Clase que calcula sumas
	* @class Suma
	* @extends Operation
	* @param {number} izq Operando izquierdo
	* @param {number} dch Operando derecho
	*/
	operations['+'] = class Suma extends Operation {
		/**
		* Constructor de la clase Suma
		* @param {number} izq Operando izquierdo
		* @param {number} dch Operando derecho
		*/
		constructor (izq, dch) {
			super(izq, dch);
		}
		
		/**
		* Función que devuelve el resultado de la suma
		* @function calculate
		*/
		calculate () {
			return (this.izq_ + this.dch_).toFixed(2);
		}
	}
	if (operations.symbols){
		operations.symbols += '+';
	}
	else{
		operations.symbols = '+';
	}
} (operations = operations || {}));
