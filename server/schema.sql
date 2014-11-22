CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  username varchar(15),
  text varchar(200),
  roomname varchar(20),
  createdAt timestamp,
  objectId varchar(20)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

-- createdAt: "2014-11-21T22:31:44.877Z"
-- objectId: "KIwUwUKiig"
-- room: "bob"
-- roomname: "lobby"
-- text: "wat"
-- updatedAt: "2014-11-21T22:31:44.877Z"
-- username: "anonymous"
