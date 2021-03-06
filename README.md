[![Build Status](https://travis-ci.org/pavelkomiagin/DataTypes.svg)](https://travis-ci.org/pavelkomiagin/DataTypes)

## DataTypes

Extend JS by additional data types:

* [Stack](#stack)
* [Queue](#queue)

### Getting started

If you need all these data types:

```javascript
var DataTypes = require('datatypes');
```

Or you can include only certain data type:

```javascript
var Stack = require('stack');
```

##### Run tests

```bash
mocha test
```

##### Make bundle using browserify

```bash
browserify src/datatypes.js -o dist/bundle.js
```

### Stack

```javascript
var stack = new DataTypes.Stack();

stack.push('hello');
stack.push('world');
stack.size(); // 2

var world = stack.pop(); // 'world'
stack.size(); // 1

var hello = stack.pop(); // 'hello'
stack.size(); // 0
```

###### Methods

```javascript
push(element) // Adds element at the top of stack.
```
```javascript
pop() // Decrements size of stack and returns the element that was previously the top one.
```
```javascript
peek() // Gets the head element of stack.
```
```javascript
size() // Returns the size of stack.
```

### Queue

```javascript
var queue = new DataTypes.Queue();

queue.enqueue('hello');
queue.enqueue('world');
queue.size(); // 2

var hello = queue.dequeue(); // 'hello'
queue.size(); // 1

var world = queue.dequeue(); // 'world'
queue.size(); // 0
```

###### Methods

```javascript
enqueue(element) // Adds element at the end of queue.
```
```javascript
dequeue() // Decrements size of queue and returns the element that was at the start of queue.
```
```javascript
size() // Returns the size of queue.
```
