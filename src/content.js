var Content = function(args, callback) {

    if (args instanceof Object) {
        // continue...
    } else {
        return false;
    }
    
    this.context = args['context'] || null;                                     // Context obj
    
    this._id = args['_id'] || null;                                             // Contex
    this.title = args['title'] || undefined;                                    // string
	this.shortTitle = args['shortTitle'] || undefined;                          // string

    // tags
    this.tags = args['tags'] || [];                                             // array

    // state : untouched draft, draft, published, archived, deleted
    this.state = args['state'] || undefined;                                    // number

    // version : 0
    this.version = args['version'] || 0;                                        // number

    // lang : fra, eng, etc.., see iso639-6 : http://goo.gl/4WFqh
    this.languageOrigin = args['languageOrigin'] || undefined;                  // string
    this.language = args['language'] || undefined;                              // string

    // available content set stages
    this.stage = args['stage'] || [0];                                          // array

    this.authors = args['authors'] || [0];                                      // array

    // unix time
    this.last_modified = args['last_modified'] || undefined;                    // number

	this.callback = callback;

};

Content.prototype = {
    
    // the global object's loading process, 
    // a set of method calls
    load: function(args, callback) {
        this.init(args, callback);
        this.setup(args, callback);
        this.fill(args, callback);
        this.teardown(args, callback);
        context.log('Content loaded');
    },
    
    init: function(args, callback) {
		try {            
            context.log('Content initialized');
		} catch(e) {
            fail("Content init function failed", e, this.callback);
		}
	},
        
    setup: function(args, callback) {
        try {
            context.log('Content setted up');
		} catch(e) {
			fail("Content setup function failed", e, this.callback);
		}
    },
    
    // fill object from model engine, using args
    fill: function(args, callback) {
        try {
            context.log('Content filled up');
		} catch(e) {
			fail("Content fill function failed", e, this.callback);
		}
    },
    
    // prepare to render the object
    teardown: function(args, callback) {
        try {
            context.log('Content teared down');
        } catch(e) {
			fail("Content teardown function failed", e, this.callback);
		}
    }
};