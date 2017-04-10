'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');

app.use(express.static('.'));
app.get('/', function(request, response){
  response.sendFile('/index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log(`You are being served at LocalPort:${PORT}`);
});

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/users/endere/repos`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}
app.get('/github/*', proxyGitHub);
//proxyGitHub code taken from kilovolt exercise
