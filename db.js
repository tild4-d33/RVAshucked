var mysql = require('mysql')

var connection;
if (process.env.JAWSDB_URL) {
  //Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : process.env.DB_NAME
  });
};
connection.connect()


// connection.query('SELECT 1 + 1 AS solution',
// 	function (error, results, fields) {
// 		if (error) throw error;
// 		console.log('The solution is: ', results[0].solution);
// 	});

module.exports = connection;