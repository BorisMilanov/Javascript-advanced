"use strict";

function area() {
  return this.x * this.y;
}

function vol() {
  return this.x * this.y * this.z;
}

function solve(area, vol, input) {
  var obejctArray = JSON.parse(input);
  return obejctArray.map(function (obj) {
    var a = Math.abs(area.call(obj));
    var v = Math.abs(vol.call(obj));
    return {
      area: a,
      volume: v
    };
  });
}