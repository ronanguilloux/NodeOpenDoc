// console-ouput a message
//ex : log(new Context({}), {foo : bar});
function log(context, message)
{
    context = context || new Context({});
    var noLogContexts = ['dev', 'test']; // dev stage, functional test stage, etc...
    if (noLogContexts.indexOf(context.type) != -1){ // modern browsers only. See http://goo.gl/JRb3D
        //continue...
    } else {
        return false;
    }
    
    if ( typeof console !== "undefined" && console.log ) {
    	// tests if a toString() func is available :
        if(typeof message.toString() === 'function') {
            console.log(message.toString());
        } else {
            console.log(message);
        }
	} else if ( window.opera && opera.postMessage ) {
		opera.postMessage(message);
	}
}

// console-ouput an exception
// ex : fail("Function " + myVar + " died, exception and callback follow", myException, myCallback);
function fail(message, exception, callback) {
    if ( typeof console !== "undefined" && console.error && console.warn ) {		
        console.error(message);
		console.error(exception);
        console.warn(callback.toString());		
	} else if ( window.opera && opera.postError ) {
		opera.postError(message, exception, callback.toString);
	}
}

// returns a new Array with the elements that are in a but not in b
function diff( a, b ) {
    var result = a.slice();
	for ( var i = 0; i < result.length; i++ ) {
		for ( var j = 0; j < b.length; j++ ) {
			if ( result[i] === b[j] ) {
				result.splice(i, 1);
				i--;
				break;
			}
		}
	}
	return result;
}