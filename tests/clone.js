var assert = chai.assert;

var BetterObjects;
var obj, clone;
var arrayClone;

var Class = function(){
    this.string = "some value";
    this.number = 344;
    this.boolean = true;
    this.object = {
        a: 10,
        b: 20
    };
    this.date = new Date();
    this.regExp = /asdfgh/i;
    this.array = [0, 1, 2, 3, 4, 5];
    this.superArray = [
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
    this.glossary = {
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
    };
    this.fn2 = function(){
        console.log('this is function 3')
    };
};

describe('Testing Object.clone', function (){
    before(function(done){
        require('index', function(){
            BetterObjects(Class);
            obj = new Class();
            clone = obj.clone();
            done();
        }, 'BetterObjects');
    });

    it('should clone an object to another object', function(){
        assert.isObject(clone, 'clone should be an object');
    });
    it('object and clone should be equal', function(){
        assert.ok(obj.equals(clone));
    });
});
