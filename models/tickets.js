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
<<<<<<< HEAD
    sec.id,
    sec.name,
    sec.features,
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
=======
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
  left join ticket t
    ON t.concertId = con.id
    AND sec.id = t.sectorId
WHERE con.id = (?)
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
         cos.cost`, [concertId], function (err, data) {
>>>>>>> d548b86... buy ticket functional finished
    if (err)
      callBack(err, null);
    else {
      callBack(null, data);
    }

  })
}

const buyTicket = (concertId, userId, sectorId, count, callBack) => {
  let arr = []
  for (let i = 0; i < Number(count); i++) {
    arr.push([concertId, userId, sectorId])
  }
  connection.query("SELECT sec.numOfSeats-COUNT(t.id) AS availibleCount FROM ticket t left join sector sec on sec.id = t.sectorId WHERE t.concertId = ? AND t.sectorId = ?", [concertId, sectorId],
      function (err, _data) {
        if (err)
          callBack(err, null);
        else {
          if(_data[0].availibleCount && _data[0].availibleCount>=count || _data[0].availibleCount===null)
          {
            connection.query("INSERT INTO ticket (concertId, userId, sectorId) VALUES ?", [arr],
                function (err, data) {
                  if (err)
                    callBack(err, null);
                  else
                    callBack(null, data);
                })
          }
          else
          {
            callBack(null,{serverStatus: 500});
          }
        }
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

