'use strict';

var Queue = function() {
  var data = [];

  /**
   * Add element at the end of queue
   * @returns {Number|undefined}
   */
  var enqueue = function(element) {
    data.push(element)
  };

  /**
   * Decrement size of queue and return the element that was at the start of queue
   * @returns {Number|undefined}
   */
  var dequeue = function() {
    return data.shift();
  };

  /**
   * Return the size of queue
   * @returns {Number}
   */
  var size = function() {
    return data.length;
  };

  return {
    enqueue: enqueue,
    dequeue: dequeue,
    size: size
  }
};

module.exports = Queue;