var Content = function(args, callback) {

    if (args instanceof Object) {
        this.args = args;
    } else {
       return false;
    }
    
    this.context = args['context'] || new Context();                            // Context obj
    this.type = args['type'] || 'generic content';                              // string
    this._id = args['_id'] || undefined;                                        // number    
    this.parent_id = args['parent_id'] || undefined;                            // string
    
    // Used when a local content match a foreign content in another IS
    this.remote_id = args['remote_id'] || undefined;                            // number
    
    this.title = args['title'] || undefined;                                    // string
	this.shortTitle = args['shortTitle'] || undefined;                          // string

    // tags
    this.tags = args['tags'] || undefined;                                      // array

    // state : new, draft, published, archived, deleted, purged
    this.state = args['state'] || undefined;                                    // number

    // version : 0
    this.version = args['version'] || 0;                                        // number

    // lang : fra, eng, etc.., see iso639-6 : http://goo.gl/4WFqh
    this.initial_language = args['initial_language'] || undefined;              // string
    this.language = args['language'] || undefined;                              // string

    // available content set stages
    this.stage = args['stage'] || undefined;                                    // array
    this.section = args['section'] || undefined;                                // array

    // authors array. 0 = anonymous
    this.authors = args['authors'] || undefined;                                // array
    this.related_contents = args['related_contents'] || undefined;              // array
    
    this.children_sort = args['children_sort'] || undefined;                    // array

    // unix times
    this.created = args['created'] || undefined;                                // number
    this.last_modified = args['last_modified'] || undefined;                    // number
    this.published = args['published'] || undefined;                            // number

    // SEO
    this.metadata = args['metadata'] || undefined;                              // object
    this.microformats = args['microformats'] || undefined;                      // object
    
    // the content semantic structure : paragraphs, medias, etc.    
    this.data_map = {};                                                         // object
    
	this.callback = callback || undefined;

};

Content.prototype = {
    
    // the global object's loading process, 
    // a set of method calls
    load: function(callback) {        
        if (this.args instanceof Object) {        
            this.init();
            this.setup();
            this.fill();
            this.teardown();
            this.context.log('Content loaded');
            this.context.log(this);
        }        
    },
    
    init: function(args) {
		try {            
            this.context.log('Content initialized');
            this.state = 'new';
		} catch(e) {
            fail("Content init function failed", e);
		}
	},
        
    setup: function(args) {
        try {
            this.context.log('Content setted up');
		} catch(e) {
			fail("Content setup function failed", e);
		}
    },
    
    // fill object from model engine, using args
    fill: function(args) {
        try {
            this.context.log('Content filled up');
		} catch(e) {
			fail("Content fill function failed", e);
		}
    },
    
    // prepare to render the object
    teardown: function(args) {
        try {
            this.context.log('Content teared down');
        } catch(e) {
			fail("Content teardown function failed", e);
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
            return this.shortTitle || undefined;        
        } catch(e) {
        	fail("Content toString() function failed", e);
		}
    },
        
    create: function(args) {
        try {
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
    
    store: function(args) {
        try {
            this.context.log('Content stored');            
        } catch(e) {
            fail("Content store() function failed", e);
        }
    },
    
    delete: function(args) {
        try {
            this.context.log('Content (mark as) deleted');            
        } catch(e) {
            fail("Content delete() function failed", e);
        }
    },
    
    archive: function(args) {
        try {
            this.context.log('Content (mark as) archived');            
        } catch(e) {
            fail("Content archive() function failed", e);
        }
    },
    
    // Hard delete, concerns content & related medias, versions, translations, etc.
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
    
    // reset short title, long title, etc.
    rename: function(args) {
        try {
            this.context.log('Content renamed');            
        } catch(e) {
            fail("Content rename() function failed", e);
        }
    },
            
    fetchByLanguage: function(args) {
        try {
            this.context.log('Content fetchByLanguaged');            
        } catch(e) {
            fail("Content fetchByLanguage() function failed", e);
        }
    },
    
    // in current stage, language & state
    fetchByVersion: function(args) {
        try {
            this.context.log('Content fetchByVersioned');            
        } catch(e) {
            fail("Content fetchByVersion() function failed", e);
        }
    },
    
    // in current stage, version & state
    fetchTranslations: function(args) {
        try {
            this.context.log('Content fetchTranslation()');            
        } catch(e) {
            fail("Content fetchTranslations() function failed", e);
        }
    },
    
    // in current stage, version & state
    fetchAvailableLanguages: function(args) {
        try {
            this.context.log('Content fetchAvailableLanguages()');            
        } catch(e) {
            fail("Content fetchAvailableLanguages() function failed", e);
        }
    },
    
    // an alias for fetching in current version, stage, state & language
    fetchCurrent: function(args) {
        try {
            this.context.log('Content fetchCurrent()');            
        } catch(e) {
            fail("Content fetchCurrent() function failed", e);
        }
    },
    
    // in current version, stage, state & language
    fetchList: function(args) {
        try {
            this.context.log('Content fetchList()');            
        } catch(e) {
            fail("Content fetchList() function failed", e);
        }
    },
    
    // in current version, stage, state & language
    fetchListCount: function(args) {
        try {
            this.context.log('Content fetchListCount()');            
        } catch(e) {
            fail("Content fetchListCount() function failed", e);
        }
    },
    
    // in current version, stage, state & language
    fetchByTag: function(args) {
        try {
            this.context.log('Content fetchByTag()');            
        } catch(e) {
            fail("Content fetchByTag() function failed", e);
        }
    },
    
    // fetch related contents in current version, stage, state & language
    fetchRelated: function(args) {
        try {
            this.context.log('Content fetchRelated()');            
        } catch(e) {
            fail("Content fetchRelated() function failed", e);
        }
    }, 
    
    // fetch related contents in current version, stage, state & language
    fetchReverseRelated: function(args) {
        try {
            this.context.log('Content fetchReverseRelated()');            
        } catch(e) {
            fail("Content fetchReverseRelated() function failed", e);
        }
    },
    
    // reset trailing drafts
    cleanUpDrafts: function(args) {
        try {
            this.context.log('Content cleanUpDrafts()');            
        } catch(e) {
            fail("Content cleanUpDrafts() function failed", e);
        }
    },
    
    // fallbcak to a previous version
    revertTo: function(args) {
        try {
            this.context.log('Content revertTo()');            
        } catch(e) {
            fail("Content revertTo() function failed", e);
        }
    },
    
    // fallbcak to a previous version
    clone: function(args) {
        try {
            this.context.log('Content cloned');            
        } catch(e) {
            fail("Content clone() function failed", e);
        }
    },

    // fetch current content's parents tree as an array of {id:name}
    getPathArray: function(args) {
        try {
            this.context.log('Content getPathArray');            
        } catch(e) {
            fail("Content getPathArray() function failed", e);
        }
    }
  
};

module.exports = Content;