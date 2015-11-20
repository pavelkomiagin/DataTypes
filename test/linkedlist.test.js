var LinkedList = require('../src/linkedlist');
var assert = require('assert');

describe('LinkedList', function() {
  it('header element of empty list', function() {
    var list = new LinkedList();

    var headItem = list.header();
    assert.equal(headItem.value, null);
    assert.equal(headItem.prev, headItem);
    assert.equal(headItem.next, headItem);
  });

  it('add element to empty list', function() {
    var list = new LinkedList();

    list.add('hello');
    assert.equal(list.size(), 1);
    var insertedItem = list.get(0);
    var headItem = list.header();

    assert.equal(insertedItem.value, 'hello');
    assert.equal(insertedItem.prev, headItem);
    assert.equal(insertedItem.next, headItem);
  });
});
