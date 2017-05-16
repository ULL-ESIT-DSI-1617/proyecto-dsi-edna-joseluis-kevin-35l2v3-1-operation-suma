"use strict";

var Operation = require("@ull-edna-joseluis-kevin-3512/ull-operation").Operation;
var operations = require("@ull-edna-joseluis-kevin-3512/ull-operation").operations;


/**
* Clase que calcula la suma entre dos dígitos
* @class Suma
* @param {number} izq Operando izquierdo
* @param {number} dch Operando derecho
*/

(function (operations){
  module.export = operation['+'] = class Suma extends Operation {
    constructor (izq, dch){
      super(izq,dch);
    }
    calculate(){
      return (this.izq + this.dch).toFixed(2);
    }
  }

  if(operations.symbols){
    operations.symbols += '+';
  }else{
    operations.symbols = '+';
  }
}(global.operations = global.operations || {}));
