const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "ticketmanager",
  password: ""
});

const getUserByEmail = (email, callBack) => {
  connection.query("SELECT * FROM users WHERE email = ?", [email], function (err, data) {
    if (err)
      callBack(err, null);
    else
      callBack(null, data[0]);
  })
}

const setUser = (email, name, sname, password, callBack) => {
  connection.query("INSERT INTO users (email, name, sname, password) VALUES (?,?,?,?)",
      [email, name, sname, password],
      function (err, data) {
        if (err)
          callBack(err, null);
        else
          callBack(null, data);
      })
}

const delUser = (email, callBack) => {
  connection.query("DELETE FROM users WHERE email = ?",
      [email],
      function (err, data) {
        if (err)
          callBack(err, null);
        else
          callBack(null, data);
      }
  )
}


module.exports.getUserByEmail = getUserByEmail
module.exports.setUser = setUser
module.exports.delUser = delUser

