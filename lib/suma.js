"use strict";

var Operation = require("@ull-edna-joseluis-kevin-35l2/ull-operation");

/**
* Clase que calcula la suma entre dos dígitos
* @class Suma
* @param {number} izq Operando izquierdo
* @param {number} dch Operando derecho
*/

(function (operations){
  module.exports = operations['+'] = class Suma extends Operation {
    constructor (izq, dch){
      super(izq,dch);
    }
    calculate(){
      return (this.izq_ + this.dch_).toFixed(2);
    }
  }

  if(operations.symbols){
    operations.symbols += '+';
  }else{
    operations.symbols = '+';
  }
}(global.operations = global.operations || {}));
