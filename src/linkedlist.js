'use strict';

var LinkedList = function() {
  var data = [];

  var ListItem = function(value, next, prev) {
    return {
      value: value,
      next: next,
      prev: prev
    }
  };

  /**
   * Return a pseudo-element
   * @returns {Object}
   */
  var header = function() {
    var headItem;

    if (data.length) {
      headItem = new ListItem(null, data[0], data[data.length - 1]);
    } else {
      headItem = new ListItem(null, null, null);
      headItem.next = headItem.prev = headItem;
    }
    return headItem;
  };

  /**
   * Add element to the end of list and increase list's size
   */
  var add = function(value) {
    var headItem = header();
    var newItem = new ListItem(value, headItem, headItem.prev);
    newItem.prev.next = newItem;
    newItem.next.prev = newItem;
    data.push(newItem);
  };

  var addLast = function(value) {
    return add(value);
  };

  /**
   * Return the element by index
   * @returns {Object}
   */
  var get = function(index) {
    return data[index];
  };

  /**
   * Return the size of stack
   * @returns {Number}
   */
  var size = function() {
    return data.length;
  };

  return {
    header: header,
    add: add,
    addLast: addLast,
    get: get,
    size: size
  };
};

module.exports = LinkedList;
