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
    t.id as ticketId,
    t.userId,
    t.sectorId,
    c.place,
    c.band,
    c.date,
    c.id as concertId,
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
    sec.svgCors,
    sec.numOfSeats,
    con.band,
    con.place,
    con.date,
    cos.cost,
    hal.img
FROM
    sector sec
INNER JOIN concerts con
INNER JOIN halls hal
INNER JOIN costs cos
\tON cos.sectorId=sec.id AND cos.concertId=con.id AND con.place=hal.place
WHERE con.id = (?)`, [concertId], function (err, data) {
    if (err)
      callBack(err, null);
    else {
      callBack(null, data);
    }

  })
}
/*SELECT
  sec.id,
  sec.name,
  sec.features,
  sec.svgCors,
  sec.numOfSeats,
  con.band,
  con.place,
  con.date,
  cos.cost,
  hal.img,
  COUNT(t.id) AS tickCount
FROM sector sec
  INNER JOIN concerts con
  INNER JOIN halls hal
  INNER JOIN costs cos
    ON cos.sectorId = sec.id
    AND cos.concertId = con.id
    AND con.place = hal.place
  JOIN ticket t ON t.concertId = con.id AND sec.id = t.sectorId

WHERE con.id = 3
GROUP BY t.sectorId,
         sec.id,
         sec.name,
         sec.numOfSeats,
         sec.features,
         sec.svgCors,
         con.band,
         con.place,
         con.date,
         hal.img,
         cos.cost*/

const buyTicket = (concertId, userId, sectorId, count, callBack) => {
  let arr = []
  console.log("count", count)
  for (let i = 0; i < Number(count); i++) {
    console.log("cycle")
    arr.push([concertId, userId, sectorId])
  }
  console.log("arr", arr)
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

