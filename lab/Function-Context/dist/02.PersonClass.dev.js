"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  function Person(firstName, secondName) {
    _classCallCheck(this, Person);

    this.firstName = firstName;
    this.secondName = secondName;
  }

  _createClass(Person, [{
    key: "fullName",
    get: function get() {
      return this.firstName + ' ' + this.secondName;
    },
    set: function set(splitedName) {
      var newFullName = splitedName.split(' ');

      if (newFullName.length !== 2) {
        return;
      }

      this.firstName = newFullName[0];
      this.secondName = newFullName[1];
    }
  }]);

  return Person;
}();

var person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov

person.firstName = "George";
console.log(person.fullName); //George Ivanov

person.lastName = "Peterson";
console.log(person.fullName); //George Peterson

person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola

console.log(person.lastName); //Tesla