var smtpserver = require('./saleshub-smtp-server');

var SERVER_PORT = 25;
var SERVER_HOST = '0.0.0.0';

smtpserver.listen(SERVER_PORT, SERVER_HOST);