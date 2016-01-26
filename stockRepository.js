var mongoClient = require('mongodb').MongoClient

var mongoUrl = process.env.MONGOLAB_URI;

if(mongoUrl === undefined){
	mongoUrl = 'mongodb://heroku_frmm2rs4:aukg64mlmvmebiek4n344k1hph@ds047955.mongolab.com:47955/heroku_frmm2rs4';
}

//var mongoUrl = 'mongodb://localhost:27017/myproject';
var connection = mongoClient.connect(mongoUrl);

module.exports = function () {
    return {
        findAll: function () {
            return connection.then(function (db) {
                return db.collection('stock').find({}).toArray();
            });
        },
		getCount: function (isbn) {
            return connection.then(function (db) {
                return db.collection('stock').find({"isbn": isbn}).limit(1).next();
            });
        },
        stockUp: function (isbn, count) {
            return connection.then(function (db) {
                return db.collection('stock').updateOne({isbn: isbn}, {
                    isbn: isbn,
                    count: count
                }, {upsert: true});
            });
        }
    };
};