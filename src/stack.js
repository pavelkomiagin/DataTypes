'use strict';

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
    return data.shift();
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
    return data.length;
  };

  return {
    push: push,
    pop: pop,
    peek: peek,
    size: size
  };
};

module.exports = Stack;
