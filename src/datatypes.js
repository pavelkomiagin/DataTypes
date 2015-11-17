'use strict';

var Stack = require('./stack');
var Queue = require('./queue');

var DataTypes = function() {
  return {
    Stack: Stack,
    Queue: Queue
  }
};

module.exports = DataTypes;