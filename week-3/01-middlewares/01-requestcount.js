const request = require('supertest');
const assert = require('assert');
const express = require('express');
const { error } = require('console');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.use((req, res, next) => {
  requestCount++; // Increment count on every request
  console.log(`Request count: ${requestCount}`); // Log the request count
  next(); // Pass control to the next middleware or route handler
});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

app.listen(5005)
module.exports = app;