const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "ticketmanager",
  password: ""
});

const getAllTickets = (callBack) => {
  connection.query(`
    SELECT t.id,con.place, con.band, sec.place, usr.email FROM ticket t
    INNER JOIN concerts con ON con.id = t.concertId
    INNER JOIN sector sec ON sec.id = t.sectorId
    INNER JOIN users usr ON usr.id = t.userId
    
`, function (err, data) {
    if (err)
      callBack(err, null);
    else
      callBack(null, data);
  })
}



module.exports.getAllConcerts = getAllTickets

