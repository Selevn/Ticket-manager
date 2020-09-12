const express =require('express');
const config = require("config");
var cors = require('cors')
const app = express();

var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json({extended: true}))
app.use('/api/auth',cors(corsOptions),require("./routes/auth.router.js"))
app.use('/api/tickets',cors(corsOptions),require("./routes/ticket.router.js"))
app.use('/api/concerts',cors(corsOptions),require("./routes/concert.router.js"))

app.get("/check",
    (request, response) => {
      console.log("request");
      response.status(201).send("hola amigo")
    })

const PORT = config.port||3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});