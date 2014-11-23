var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      db.connect();
      db.query('select * from messages', function(rows) {
        callback(rows);
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

