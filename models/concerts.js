const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "ticketmanager",
  password: ""
});

const getAllConcerts = (callBack) => {
  connection.query(`SELECT con.id, con.band, con.place, con.date, con.imgSrc,
SUM(s.numOfSeats) AS totalSeats,
t2.total2 AS busySeats

FROM concerts con

left JOIN halls h
ON h.place = con.place

left JOIN sector s ON h.place = s.place

LEFT JOIN
(
  SELECT con.id AS concertId, con.band, con.place, con.date, con.imgSrc,
  Count(t.id) AS total2
  
  FROM concerts con
  
  left JOIN halls h
  ON h.place = con.place
  
  left JOIN ticket t ON t.concertId = con.id
  
  GROUP BY con.id
) t2 ON t2.concertId=con.id

GROUP BY con.id
`, function (err, data) {
    if (err)
      callBack(err, null);
    else
      callBack(null, data);
  })
}

const addConcert = (band, place, date, img, callBack) => {
  connection.query("INSERT INTO concerts (band, place, date,img) VALUES (?,?,?,?)",
      function (err, data) {
        if (err)
          callBack(err, null);
        else
          callBack(null, data);
      })
}

const getConcertById = (id, callBack) => {
  connection.query("SELECT * FROM concerts WHERE id = ?",
      [id],
      function (err, data) {
        if (err)
          callBack(err, null);
        else
          callBack(null, data[0]);
      }
  )
}


module.exports.getAllConcerts = getAllConcerts
module.exports.addConcert = addConcert
module.exports.getConcertById = getConcertById

