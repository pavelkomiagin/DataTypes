var Queue = require('../src/queue');
var assert = require('assert');

describe('Queue', function() {
  it('enqueue method increase size by 1', function() {
    var queue = new Queue();

    queue.enqueue('hello');
    assert.equal(queue.size(), 1);
    queue.enqueue('world');
    assert.equal(queue.size(), 2);
  });
  
  it('dequeue method decrease size by 1', function() {
    var queue = new Queue();

    queue.enqueue('hello');
    queue.enqueue('this');
    queue.enqueue('world');
    var elem = queue.dequeue();
    assert.equal(queue.size(), 2);
  });
  
  it('dequeue method return correct value', function() {
    var queue = new Queue();
  
    queue.enqueue('hello');
    queue.enqueue('this');
    queue.enqueue('world');
    assert.equal(queue.dequeue(), 'hello');
    assert.equal(queue.dequeue(), 'this');
    assert.equal(queue.dequeue(), 'world');
  });
});
