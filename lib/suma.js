"use strict";

var Operation = require("@ull-edna-joseluis-kevin-3512/ull-operation").Operation;
car operations = require("@ull-edna-joseluis-kevin-3512/ull-operation").operations;

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
