var models = require('../models');
var bluebird = require('bluebird');
// var cors = require('cors');


var messages = {
  results: [
    {
      username: 'jack',
      text: 'hellow worlld',
      roomname: 'lobby',
      objectId: 0
    }
  ]
};

var objectId = 1;

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log(messages);
      res.end(JSON.stringify(messages));
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
        messages.results.push(req.body);
        console.log('ended: ', messages.results);
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

