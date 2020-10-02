const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "ticketmanager",
  password: ""
});

const getUserByEmail = (email, callBack) => {
  connection.query("SELECT * FROM users WHERE email = ?",[email],function(err, data) {
    if(err)
      callBack(err,null);
    else
      callBack(null,data[0]);})
}

const setUser = (email, name, sname, password, secret, callBack) => {
  connection.query("INSERT INTO users (email, name, sname, password, secret) VALUES (?,?,?,?,?)",
      [email, name, sname, password, secret],
      function (err, data) {
        if (err)
          callBack(err, null);
        else
          callBack(null,data);})
}

const getSecret = (email, callBack) => {
  connection.query("SELECT secret FROM users WHERE email = ?",
      [email],
      function (err, data) {
        if (err)
          callBack(err, null);
        else
          callBack(null, data);
      })
}
const approve = (email, callBack) => {
  connection.query("UPDATE users SET isApproved = 1 WHERE email = ?",
      [email],
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
      function(err, data) {
        if(err)
          callBack(err,null);
        else
          callBack(null,data);}
      )
}


module.exports.getUserByEmail = getUserByEmail
module.exports.setUser = setUser
module.exports.delUser = delUser
module.exports.getSecret = getSecret
module.exports.approve = approve

