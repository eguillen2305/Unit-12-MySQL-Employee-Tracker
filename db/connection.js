const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'employeeTracker_DB'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('connected as id ' + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;
