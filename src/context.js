// Params :
var defaultContext = 'dev';

var Context = function(args) {
    
    this.type = defaultContext;
    if (args instanceof Object) {
        this.args = args;
    } else {
        return false;
    }
    this.type = args['type'] || this.type;                                 // string
};

Context.prototype = {
    
    load: function() {
        this.init();        
    },
    
    log: function(message) {
        log(this, message);        
    },
    
    init: function() {
        try {
            // ...	
		} catch(e) {
			fail("init function failed", e);
		}
	}
};