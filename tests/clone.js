var assert = chai.assert;

var clone;
var arrayClone;

var obj = {
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
            "fn": function(){
                console.log('i\'m a function');
            },
            "array": [1, 3, 4, 5, 6]
        }
    ],
    glossary: {
        title: "example glossary",
        GlossDiv: {
            title: "S",
            fn1: function(){
                console.log('something');
            },
            GlossList: {
                GlossEntry: {
                    ID: "SGML",
                    SortAs: "SGML",
                    GlossTerm: "Standard Generalized Markup Language",
                    Acronym: "SGML",
                    Abbrev: "ISO 8879:1986",
                    GlossDef: {
                        para: "A meta-markup language, used to create markup languages such as DocBook.",
                        GlossSeeAlso: ["GML", "XML"]
                    },
                    GlossSee: "markup",
                }
            }
        }
    }, 
    "fn2": function(){
        console.log('this is function 3')
    }
};

var theArray = [
    "string",
    1,
    true,
    ["an", "array", "of", "strings"],
    {
        "str": "dfsdfh",
        "fn": function(){
            console.log('i\'m a function');
        },
        "array": [1, 3, 4, 5, 6]
    }
];

describe('Testing Object.clone', function (){
    clone = obj.clone();
    it('should clone an object to another object', function(){
        assert.isObject(clone, 'clone should be an object');
    });
    it('object and clone should be equal', function(){
        assert.ok(obj.equals(clone));
    });
    it('assert.deepEqual should work also', function(){
        assert.deepEqual(obj, clone);
    });
});

describe('testing Array.clone', function(){
    arrayClone = theArray.clone();
    it('should clone an array to another array', function(){
        assert.ok(Array.isArray(arrayClone));
    });
    it('theArray and arrayClone should be of the same lenght', function(){
        assert.equal(theArray.length, arrayClone.length);
    });
    it('theArray and arrayClone should be similar', function(){
        assert.deepEqual(theArray, arrayClone);
        assert.ok(theArray.equals(arrayClone));
        assert.ok(arrayClone.equals(theArray));
    });
});
