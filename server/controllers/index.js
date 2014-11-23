var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');

var objectId = 1;

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(rows){
        var storage = {};
        storage.results = rows;
        res.end(JSON.stringify(storage));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {

        req.body["objectId"] = objectId++;
        var username = req.body.username;
        var text = req.body.text;
        var roomname = req.body.roomname;
        var id = req.body.objectId;
        models.messages.post(username, text, roomname, id);

      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

