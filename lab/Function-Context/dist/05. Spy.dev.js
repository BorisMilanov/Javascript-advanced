"use strict";

function Spy(obj, methodName) {
  var spy = {
    count: 0
  };
  var method = obj[methodName];

  if (!method) {
    throw new Error('No such method!');
  }

  obj[methodName] = function () {
    this.count++;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return method.apply(obj, args);
  }.bind(spy);

  return spy;
}

var obj = {
  method: function method() {
    return "invoked";
  }
};
var spy = Spy(obj, "method");
obj.method();
obj.method();
obj.method();
console.log(spy);