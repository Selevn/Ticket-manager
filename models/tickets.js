const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "ticketmanager",
  password: ""
});

const getUserTickets = (userId,callBack) => {
  connection.query("SELECT * FROM ticket WHERE userId = (?)",[userId], function (err, data) {
    if (err)
      callBack(err, null);
    else
      callBack(null, data);
  })
}

const buyTicket = (userId, place, sector,cost, callBack) => {
  connection.query("INSERT INTO ticket (userId, place, sector,cost) VALUES (?,?,?,?)",[userId, place, sector,cost],
      function (err, data) {
        if (err)
          callBack(err, null);
        else
          callBack(null, data);
      })
}

const deleteTicket = (id, callBack) => {
  connection.query("DELETE tickets WHERE id = ?",
      [id],
      function (err, data) {
        if (err)
          callBack(err, null);
        else
          callBack(null, data[0]);
      }
  )
}


module.exports.getUserTickets = getUserTickets
module.exports.buyTicket = buyTicket
module.exports.deleteTicket = deleteTicket

