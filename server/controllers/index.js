var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');
// var cors = require('cors');


// var messages = {
//   results: [
//     {
//       username: 'jack',
//       text: 'hellow worlld',
//       roomname: 'lobby',
//       objectId: 0
//     }
//   ]
// };

var objectId = 1;

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log(messages);
      models.messages.get(function(rows){
        var storage = {};
        storage.results = rows;
        res.end(JSON.stringify(storage));
        // db.end();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log('Hello!', req.body);
      // var tempData = '';
      // req.on('data', function(chunk){
      //   console.log('Data Chunk:', chunk);
      //   tempData += chunk;
      // });
      // req.on('end', function(){
        req.body["objectId"] = objectId++;
        var username = req.body.username;
        var text = req.body.text;
        var roomname = req.body.roomname;
        var id = req.body.objectId;
        models.messages.post(username, text, roomname, id);

        // messages.results.push(req.body);
        // console.log('ended: ', messages.results);
      // });
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

