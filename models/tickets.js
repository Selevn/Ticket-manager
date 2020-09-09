const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "ticketmanager",
  password: ""
});

const getUserTickets = (userId, callBack) => {
  connection.query(`SELECT
    t.id,
    t.userId,
    t.sectorId,
    c.place,
    c.band,
    c.date,
    c.id,
    co.cost
FROM
    ticket t
INNER JOIN concerts c
    ON t.concertId = c.id
INNER JOIN costs co
\tON co.sectorId=t.sectorId AND co.concertId=c.id
WHERE t.userId = (?)`, [userId], function (err, data) {
    if (err)
      callBack(err, null);
    else {
      callBack(null, data);
    }

  })
}
const getConcertTickets = (concertId, callBack) => {
  connection.query(`SELECT
    sec.id,
    sec.name,
    sec.features,
    sec.vipFeatures,
    sec.vipNum,
    sec.numOfSeats,
    con.band,
    con.place,
    cos.cost
FROM
    sector sec
INNER JOIN concerts con
INNER JOIN costs cos
\tON cos.sectorId=sec.id AND cos.concertId=con.id
WHERE con.id = (?)`, [concertId], function (err, data) {
    if (err)
      callBack(err, null);
    else {
      callBack(null, data);
    }

  })
}

const buyTicket = (concertId, userId, sectorId, count, callBack) => {
  let arr = []
  console.log("count",count)
  for (let i = 0; i < Number(count); i++) {
    console.log("cycle")
    arr.push([concertId, userId, sectorId])
  }
  console.log("arr",arr)
  connection.query("INSERT INTO ticket (concertId, userId, sectorId) VALUES ?", [arr],
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
module.exports.getConcertTickets = getConcertTickets
module.exports.buyTicket = buyTicket
module.exports.deleteTicket = deleteTicket

