var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = exports = {};

var connection = mysql.createConnection(
  {
    user: 'root',
    password:'',
    database:'chat'
  }
);

exports.connect = function() {
  connection.connect(function(err) {
    console.log('connected!');
  });
};

exports.query = function(queryString, callback) {
  var queryString = queryString;
  console.log(queryString);
  connection.query(queryString, function(err, rows){
    if(err){
      throw err;
    } else {
      return callback(rows);
    }
  });
};

exports.end = function() {
  connection.end(function(err){
    console.log('connection ended!');
  });
};
