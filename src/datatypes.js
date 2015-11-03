'use strict';

var DataTypes = function() {
  var Stack = function() {
    var data = [];

    /**
     * Add element at the top of stack
     * @returns {Number|undefined}
     */
    var push = function(element) {
      data.unshift(element);
    };

    /**
     * Decrement size of stack and return the element that was previously the top one
     * @returns {Number|undefined}
     */
    var pop = function() {
      return data.unshift();
    };

    /**
     * Get the head element of stack
     * @returns {Number|undefined}
     */
    var peek = function() {
      return data[0];
    };

    /**
     * Return the size of stack
     * @returns {Number}
     */
    var size = function() {
      return data.size;
    };

    return {
      push: push,
      pop: pop,
      peek: peek,
      size: size
    };
  };

  return {
    Stack: Stack
  }
};

module.exports = DataTypes;