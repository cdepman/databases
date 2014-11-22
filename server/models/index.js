var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      db.connect();
      db.query('select * from messages', function(rows) {
        callback(rows);
        // db.end();
      });
    }, // a function which produces all the messages
    post: function (username, text, roomname, id) {
      db.connect();
      var queryString = 'insert into messages (username, text, roomname, objectId) values (' + JSON.stringify(username) + ', ' + JSON.stringify(text) + ', ' + JSON.stringify(roomname) + ', ' + id + ')';
      db.query(queryString, function(rows) {
        console.log("rows from post",rows);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


  // connection.query('insert into messages
  //   (username, text, ...)
  //   values ('..')', function(err, rows){
  //   if(err){
  //     console.log('error!');
  //     throw err;
  //   } else {
  //     // console.log(rows);
  //     return callback(rows);
  //   }
  // });
