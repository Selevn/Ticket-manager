const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "ticketmanager",
  password: ""
});

const getAllHalls = (callBack) => {
  connection.query("SELECT * FROM halls", function (err, data) {
    if (err)
      callBack(err, null);
    else
      callBack(null, data);
  })
}

const addHall = (place, description, img, callBack) => {
  connection.query("INSERT INTO halls (place, description, img) VALUES (?,?,?)",
      function (err, data) {
        if (err)
          callBack(err, null);
        else
          callBack(null, data);
      })
}

const getHallById = (id, callBack) => {
  connection.query("SELECT * FROM halls WHERE id = ?",
      [id],
      function (err, data) {
        if (err)
          callBack(err, null);
        else
          callBack(null, data[0]);
      }
  )
}
const getHallConcerts = (id, callBack) => {
  connection.query("SELECT place FROM halls WHERE id = ?",
      [id],
      function (err, data) {
        if (err)
          callBack(err, null);
        else {
          connection.query("SELECT * FROM concerts WHERE place = ?", data[0],
              function (err, data) {
                if (err)
                  callBack(err, null);
                else {
                  callBack(null, data[0]);
                }
              })
        }
      }
  )
}


module.exports.getAllHalls = getAllHalls
module.exports.addHall = addHall
module.exports.getHallById = getHallById
module.exports.getHallConcerts = getHallConcerts

