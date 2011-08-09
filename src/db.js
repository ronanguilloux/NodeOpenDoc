// Initialize connection
// usage : var db = require('db.js');
module.exports = function() {

    // Db connection
    var Db = require('../lib/mongodb').Db,
        Connection = require('../lib/mongodb').Connection,
        Server = require('../lib/mongodb').Server,
        // BSON = require('../lib/mongodb').BSONPure;
        BSON = require('../lib/mongodb').BSONNative;

    var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
    var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : Connection.DEFAULT_PORT;

    sys.puts("Connecting to " + host + ":" + port);

    return array(host, port);
}
