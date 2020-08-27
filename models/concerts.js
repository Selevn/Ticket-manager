const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "ticketmanager",
  password: ""
});

const getAllConcerts = (callBack) => {
  connection.query("SELECT * FROM concerts", function (err, data) {
    if (err)
      callBack(err, null);
    else
      callBack(null, data);
  })
}

const addConcert = (band, place, date,img, callBack) => {
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


module.exports.getAllHalls = getAllConcerts
module.exports.addConcert = addConcert
module.exports.getConcertById = getConcertById

