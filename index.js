var BetterObjects = module.exports = function(obj, options){
    options = options || {};
    options.clone = options.clone || 'clone';
    options.equals = options.equals || 'equals';

    if(options.notClone !== false){
        obj.prototype.clone = function() {
            var theClone; 
            if( Array.isArray(this) ){
                theClone = traverseArray(this);
            } else {
                theClone = {};
                traverseObject(this, theClone);
            }
            return theClone;
        };
    }

    if(options.notEquals !== false){
        obj.prototype.equals = function(target){
            return traverseEquals(this, target);
        };
    }
};


//Clone Private Methods

var traverseObject = function(obj, clone){
    Object.keys(obj).forEach(function(key){
        clone[key] = cloneProperty(obj[key]);
    });
};

var traverseArray = function(arr){
    var finalArray = [];
    arr.forEach(function(item){
        finalArray.push(cloneProperty(item));
    });
    return finalArray;
};

var cloneProperty = function(prop){
    var clone;
    if(prop === null){
        clone = null;
    }
    if(Array.isArray(prop)){
        clone = traverseArray(prop);
    } 
    else if(prop.constructor === Date){
        clone = new Date(prop.toString());
    }
    else if(prop.constructor === RegExp){
        clone = new cloneRegExp(prop);
    }
    else if(typeof prop === 'object'){
        clone = {};
        traverseObject(prop, clone);
    } 
    //we don't clone functions for performance reasons
    // else if(typeof prop === 'function'){
    //     clone = eval(prop.toString());
    // }
    else {
        clone = prop;
    }
    return clone;
};

//http://www.bennadel.com/blog/2664-cloning-regexp-regular-expression-objects-in-javascript.htm
var cloneRegExp = function(input, injectFlags){
    var pattern = input.source;
    var flags = '';
    injectFlags = (injectFlags || '');
    if (input.global || (/g/i).test(injectFlags)){
        flags += "g";
    }
    if (input.ignoreCase || (/i/i).test(injectFlags)){
        flags += "i";
    }
    if (input.multiline || (/m/i).test(injectFlags)){
        flags += "m";
    }
    return(new RegExp(pattern, flags ));
}


var traverseEquals = function(one, two){
    var equals = true;
    if([Date, RegExp].indexOf(one.constructor) > -1 || typeof one === 'function'){
        if(one.toString() !== two.toString()){
            equals = false;
        }
    }
    else if( Array.isArray(one) ){
        if(one.length !== two.length){
            equals = false;
        }
        one.forEach(function(val, idx){
            traverseEquals( one[idx], two[idx] );
        });
    }
    else if( typeof one === 'object' ){
        if(Object.keys(one).length !== Object.keys(two).length){
            equals = false;
        }
        Object.keys(one).forEach(function(key){
            traverseEquals(one[key], two[key]);
        });
    } 
    //primitives
    else {
        if(one !== two){
            equals = false;
        }
    }
    return equals;
};

