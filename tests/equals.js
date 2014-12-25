// var assert = chai.assert;

// describe('Testing Object.equals', function (){

//     var fn1 = function(){
//         console.log('something');
//     };

//     var fn2 = function(){ console.log('i\'m a function'); };


//     var objOne = {
//         "string": "some value",
//         "number": 344,
//         "boolean": true,
//         "object": {
//             a: 10,
//             b: 20
//         },
//         "array": [0, 1, 2, 3, 4, 5],
//         "superArray": [
//             "string",
//             1,
//             true,
//             ["an", "array", "of", "strings"],
//             {
//                 "str": "dfsdfh",
//                 "fn": fn2,
//                 "array": [1, 3, 4, 5, 6]
//             }
//         ],
//         glossary: {
//             title: "example glossary",
//             GlossDiv: {
//                 title: "S",
//                 fn: fn1,
//                 GlossList: {
//                     GlossEntry: {
//                         ID: "SGML",
//                         SortAs: "SGML",
//                         GlossTerm: "Standard Generalized Markup Language",
//                         Acronym: "SGML",
//                         Abbrev: "ISO 8879:1986",
//                         GlossDef: {
//                             para: "A meta-markup language, used to create markup languages such as DocBook.",
//                             GlossSeeAlso: ["GML", "XML"]
//                         },
//                         GlossSee: "markup",
//                     }
//                 }
//             }
//         }
//     };

//     var objTwo = {
//         "string": "some value",
//         "number": 344,
//         "boolean": true,
//         "object": {
//             a: 10,
//             b: 20
//         },
//         "array": [0, 1, 2, 3, 4, 5],
//         "superArray": [
//             "string",
//             1,
//             true,
//             ["an", "array", "of", "strings"],
//             {
//                 "str": "dfsdfh",
//                 "fn": fn2,
//                 "array": [1, 3, 4, 5, 6]
//             }
//         ],
//         glossary: {
//             title: "example glossary",
//             GlossDiv: {
//                 title: "S",
//                 fn: fn1,
//                 GlossList: {
//                     GlossEntry: {
//                         ID: "SGML",
//                         SortAs: "SGML",
//                         GlossTerm: "Standard Generalized Markup Language",
//                         Acronym: "SGML",
//                         Abbrev: "ISO 8879:1986",
//                         GlossDef: {
//                             para: "A meta-markup language, used to create markup languages such as DocBook.",
//                             GlossSeeAlso: ["GML", "XML"]
//                         },
//                         GlossSee: "markup",
//                     }
//                 }
//             }
//         }
//     };

//     it('objOne and objTwo should be equal', function(){
//         assert.deepEqual(objOne, objTwo);
//     });
//     it('equals should return true', function(){
//         assert.ok(objOne.equals(objTwo));
//     });

//     var string1 = JSON.stringify(objOne);
//     var string2 = JSON.stringify(objTwo);

//     it('should have equal stringifies', function(){
//         assert.equal(string1, string2);
//     });

//     var fromStringOne = JSON.parse(string1);
//     var fromStringTwo = JSON.parse(string2);

//     it('should be two equal objects after stringify/parse', function(){
//         assert.deepEqual(fromStringOne, fromStringTwo);
//         assert.ok(fromStringOne.equals(fromStringTwo));
//         assert.ok(fromStringTwo.equals(fromStringOne));
//     });   

//     it('should not be equals after changing', function(){
//         var diffObj = objOne.clone();
//         diffObj.glossary.title = 'something else';
//         assert.notOk(objOne.equals(diffObj));
//         assert.notOk(diffObj.equals(objOne));
//     });

//     it('should not be equals after changing a value inside a deep array', function(){
//         var diffObj = objOne.clone();
//         diffObj.superArray[3][2] = 'something else';
//         assert.notOk(objOne.equals(diffObj));
//         assert.notOk(diffObj.equals(objOne));
//     });

//     it('an object should be equal to itself', function(){
//         assert.ok(objOne.equals(objOne));
//         assert.ok(objTwo.equals(objTwo));
//     });
// });
