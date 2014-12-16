Object.prototype.clone = function() {
    var theClone;

    var traverseObject = function(obj, clone){
        Object.keys(obj).forEach(function(key){
            if(obj[key] === null){
                clone[key] = null;
            }
            if(Array.isArray(obj[key])){
                clone[key] = traverseArray(obj[key]);
            } 
            else if(obj[key].constructor === Date){
                clone[key] = new Date(obj[key].toString());
            }
            //http://www.bennadel.com/blog/2664-cloning-regexp-regular-expression-objects-in-javascript.htm
            else if(obj[key].constructor === RegExp){
                clone[key] = new Date(obj[key].toString());
            }
            else if(typeof obj[key] === 'object'){
                clone[key] = {};
                traverseObject(obj[key], clone[key]);
            } 
            //we don't clone functions for performance reasons
            // else if(typeof obj[key] === 'function'){
            //     clone[key] = eval(obj[key].toString());
            // }
            else {
                clone[key] = obj[key];
            }
        });
    };

    var traverseArray = function(arr){
        var finalArray = [];
        arr.forEach(function(item){
            if(Array.isArray(item)){
                finalArray.push( traverseArray(item) );
            }
            else if(typeof item === 'object'){
                var newObj = {};
                traverseObject(item, newObj)
                finalArray.push( newObj );
            } 
            else {
                finalArray.push(item);
            }
        });
        return finalArray;
    }; 

    if( Array.isArray(this) ){
        theClone = traverseArray(this);
    } else {
        theClone = {};
        traverseObject(this, theClone);    
    }
    
    return theClone;
};

Object.prototype.equals = function(target){
    var equals = true;
    (function traverse(one, two){
        if(typeof one === 'function'){
            if(one.toString() !== two.toString()){
                equals = false;
            }
        }
        else if([Date, RegExp].indexOf(one.constructor) > -1){console.log(one.toString(), two.toString(), one.toString() === two.toString())
            if(one.toString() !== two.toString()){
                equals = false;
            }
        }
        else if( Array.isArray(one) ){
            if(one.length !== two.length){
                equals = false;
            }
            one.forEach(function(val, idx){
                traverse( one[idx], two[idx] );
            });
        }
        else if( typeof one === 'object' ){
            if(Object.keys(one).length !== Object.keys(two).length){
                equals = false;
            }
            Object.keys(one).forEach(function(key){
                traverse(one[key], two[key]);
            });
        } 
        //primitives
        else {
            if(one !== two){
                equals = false;
            }
        }
    })(this, target);

    return equals;
};
