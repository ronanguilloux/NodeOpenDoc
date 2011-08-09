var Content = function(args, callback) {

    if (args instanceof Object) {
        this.args = args;
    } else {
       return false;
    }
    
    this.context = args['context'] || new Context();                            // Context obj

    // type : unique doc, or an archive to be built on the fly
    // if is an archive, resource is an array of resources
    this.type = args['type'] || undefined;                                      // string
    
    this._id = args['_id'] || undefined;                                        // string    
    
    // slug déduit du titre + un truc unique
    this.slug = args['_slug'] || undefined;                                     // string
    this.title = args['title'] || undefined;                                    // string
    this.description = args['title'] || undefined;                              // string

    this.resource = args['resource'];                                           // string or array
    
    // tags
    this.tags = args['tags'] || undefined;                                      // array    
    this.sets = args['sets'] || undefined;                                      // array

    // state : 0  = exists and is standard
    // state : 1  = deleted
    this.state = args['state'] || undefined;                                    // number

    // NOT USED FOR NOW :
    // version : 0
    this.version = args['version'] || 0;                                        // number    

    // unix times
    this.created = args['created'] || undefined;                                // number
    this.last_modified = args['last_modified'] || undefined;                    // number    

    // user van edit key/value data (json object)
    this.user_metadata = args['metadata'] || undefined;                         // object    
    
    // illustration
    this.thumbnail = args['thumbnail'] || undefined;                            // string
    
	this.callback = callback || undefined;

};

var defaultState = 'standard';
var defaultType = 'document'

Content.prototype = {
    
    // the global object's loading process, 
    // a set of method calls
    load: function(args) {        
        if (this.args instanceof Object) {        
            this.init(args);            
            this.context.log('Content loaded');
        }        
    },
    
    init: function(args) {
		try {            
            this.context.log('Content initialized');
            this.state = defaultState;
            this.type = defaultType;
		} catch(e) {
            fail("Content init function failed", e);
		}
	},
    
     // Arrayize
    toArray: function(args) {
        try {
            this.context.log('Content arrayized');
        } catch(e) {
    		fail("Content toArray() function failed", e);
		}
    },
    
    // Stringify
    toString: function(args) {
        try {
            this.context.log('Content stringified');
            return this.title || undefined;        
        } catch(e) {
        	fail("Content toString() function failed", e);
		}
    },
       
    /* 
    
        
        
        Store() log toutes les actions en écriture : 
        untel a uploadé tel doc tel jour
        
        Une exception est gérée si plus d'1 resource 
        équivalente existe déjà dans un contexte particulier
        (ex: dans le même tag)
        
        args : {
            tags : [],
            title : '',
            source : '/tmp/cv.pdf',
            update: true/false,
            update_tags: ['aTag'] or undefined, or '' if we do not want to tag it
            slug : true/false : force a slug recalculating 
        }
     */
    store: function(args) {
        try {
            
            // if update, retrieve by ressource name
            // source can be an URL, to be cUrled.
            
            this.context.log('Content created');            
        } catch(e) {
            fail("Content teardown function failed", e);
		}
    },
    
    fetch: function(args) {
        try {
            this.context.log('Content fetched');            
        } catch(e) {
            fail("Content fetch() function failed", e);
    	}
    },  
    
    // alias, calls fetch with a tag list
    fetchBySlug: function(args) {
        try {
            this.context.log('Content fetchByTags');            
        } catch(e) {
            fail("Content fetchByTags() function failed", e);
        }
    },
    
    // flagged as as deleted
    delete: function(args) {
        try {
            this.context.log('Content (mark as) deleted');            
        } catch(e) {
            fail("Content delete() function failed", e);
        }
    },
       
    // Hard delete, concerns the model & its related resources
    purge: function(args) {
        try {
            this.context.log('Content purged');            
        } catch(e) {
            fail("Content purge() function failed", e);
        }
    },
    
    // validate (when content = user entries)
    validate: function(args) {
        try {
            this.context.log('Content validated');            
        } catch(e) {
            fail("Content validate() function failed", e);
        }
    },
    
    rename: function(args) {
        try {
            this.context.log('Content renamed');            
        } catch(e) {
            fail("Content rename() function failed", e);
        }
    },    
    
    // alias, calls fetchList with a tag list
    fetchByTags: function(args) {
        try {
            this.context.log('Content fetchByTags');            
        } catch(e) {
            fail("Content fetchByTags() function failed", e);
        }
    },
        
    fetchList: function(args) {
        try {
            this.context.log('Content fetchList()');            
        } catch(e) {
            fail("Content fetchList() function failed", e);
        }
    },
        
    fetchListCount: function(args) {
        try {
            this.context.log('Content fetchListCount()');            
        } catch(e) {
            fail("Content fetchListCount() function failed", e);
        }
    },
    
    createThumbs: function(args) {
        try {
            this.context.log('Content createThumbs()');            
        } catch(e) {
            fail("Content createThumbs() function failed", e);
        }
    },
    
   
};

module.exports = Content;