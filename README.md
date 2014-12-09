better-objects
============

### Implementation for Object.clone, Object.equals

Adds the following methods to Object.prototype:
* Object.prototype.clone()
 * clones an object into another object
  * deep clone, no matter how deep
  * doesn't clone functions - for performance reasons keeps a reference to the same function
   * if, for some reason, you need to clone the functions, you can uncomment lines 13/16
* Object.prototype.equals()
 * checks if two objects are equal to each other
   * also works with arrays
   * returns true for similar objects or for references to the same object
   
You can choose not to add the methods to the Object prototype, it's really simple to change
   

### usage:

#### install
```shell
$ npm install better-objects
```
#### and in the code (once)
```javascript
require('better-objects');
//or just 
<script src="node_modules/better-objects/index.js"></script>
```
#### using clone: 
```javascript
var object = { ... };
var clone = object.clone();
// or with arrays
var arr = [...];
var clone = arr.clone();
```

#### using equals: 
```javascript
var objOne = {
  "string": "some value",
  "number": 344,
  "boolean": true,
  "object": {
      a: 10,
      b: 20
  },
  "array": [0, 1, 2, 3, 4, 5],
  "superArray": [
    "string",
    1,
    true,
    ["an", "array", "of", "strings"],
    {
        "str": "dfsdfh",
        "fn": somefunction,
        "array": [1, 3, 4, 5, 6]
    }
  ]
};

var objTwo = {
  "string": "some value",
  "number": 344,
  "boolean": true,
  "object": {
      a: 10,
      b: 20
  },
  "array": [0, 1, 2, 3, 4, 5],
  "superArray": [
    "string",
    1,
    true,
    ["an", "array", "of", "strings"],
    {
        "str": "dfsdfh",
        "fn": somefunction,
        "array": [1, 3, 4, 5, 6]
    }
  ]
};

var objThree = {
  something: 'different'
}

objOne.equals(objTwo); // returns true
objTwo.equals(objOne); // rerturns true
objOne.equals(objThree); // returns false
objThree.equals(objTwo); // returns false
```

##### note
- .equals does not make a strict comparison for functions, it is implemented as such:
```javascript
if( fn1.toString() === fn2.toString() ) { equals = true };
```
if you wish to have strict equality, just change it to:
```javascript
if( fn1 === fn2 ) { equals = true };
```

### running the tests
I'm using Testem + Mocha + Chai
```
$ npm install -g testem
$ npm install
# run the tests
$ testem
```
