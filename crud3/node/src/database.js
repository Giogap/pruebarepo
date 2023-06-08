const mysql2 = require('mysql2/promise');

const { database } = require('./keys');

const connet = mysql2.createPool({
  ...database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

async function connect_db() {
  return connet.getConnection()
    .then((conn) => {
      conn.release();
      console.log("DB Ok")
    })
    .catch((err) => {
      console.log(err);
    })
}

console.log(database)



module.exports = {
  connect_db,
  connet
}