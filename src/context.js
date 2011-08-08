// Params :
var defaultContext = 'dev';

var Context = function(args, callback) {
    if (args instanceof Object) {
        // continue...
    } else {
        return false;
    }
    this.type = args['type'] || defaultContext;                                 // string
};

Context.prototype = {
    
    load: function(args, callback) {
        this.init(args, callback);        
    },
    
    log: function(message, callback) {
        log(this, message, callback);        
    },
    
    init: function(args, callback) {
        try {
            // ...	
		} catch(e) {
			fail("init function failed", e, this.callback);
		}
	}
};