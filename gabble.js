//need middleware
//need mustache template
const mustache = require('mustache');
const mustacheExpress= require('mustache-express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');

//mustache requirements
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.get('./mustache', function (req, res) {
  res.render('mustache', {});
});
app.post('login', bodyParser.urlencoded({ extended: false }), function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.send('Welcome, ' + req.body.username);
});

//data is at module.exports
//JavaScript will run on multiple files
//one page at a time?
//login will need authentication

/*
Users should:

have a username and password for logging in
have a display name
Messages should:

be associated with a user who wrote them
have up to 140 characters of text
Likes should:

be associated with a user who made the like and a message that was liked
The application should have ways to do the following:

Sign up as a new user
Log in
Log out
View all messages with the newest first
Create a new message
Delete one of your own messages
Like a message
See who liked a message
This will require your knowledge of forms, validation, sessions, middleware, and Sequelize. You will likely have to look up some features of these.

You may want to consider running sequelize seed:create and create a new seed file that will create several users and gabs. */
