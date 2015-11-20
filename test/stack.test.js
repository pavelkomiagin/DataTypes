var Stack = require('../src/stack');
var assert = require('assert');

describe('Stack', function() {
  it('push method increase size by 1', function() {
    var stack = new Stack();

    stack.push('hello');
    assert.equal(stack.size(), 1);
    stack.push('world');
    assert.equal(stack.size(), 2);
  });
  
  it('pop method decrease size by 1', function() {
    var stack = new Stack();

    stack.push('hello');
    stack.push('this');
    stack.push('world');
    var elem = stack.pop();
    assert.equal(stack.size(), 2);
  });
  
  it('pop method return correct value', function() {
    var stack = new Stack();
  
    stack.push('hello');
    stack.push('this');
    stack.push('world');
    assert.equal(stack.pop(), 'world');
    assert.equal(stack.pop(), 'this');
    assert.equal(stack.pop(), 'hello');
  });
  
  it('peek method return top element and not decrease stack size', function() {
    var stack = new Stack();
  
    stack.push('hello');
    stack.push('this');
    stack.push('world');
    assert.equal(stack.peek(), 'world');
    assert.equal(stack.size(), 3);
    assert.equal(stack.peek(), 'world');
    assert.equal(stack.size(), 3);
  });
});
