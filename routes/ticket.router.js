const {Router} = require("express")
const ticketRouter = Router()
const jwt = require("jsonwebtoken")
//const {getUserByEmail, setUser} = require('../models/users.js')
const {getUserTickets,getConcertTickets, buyTicket} = require('../models/tickets.js')
const config = require("config")

ticketRouter.post("/getMyTickets", async (request, response) => {
      try {
        const body = request.body;
        const {id} = jwt.verify(body.token, config.get("jwtSecretKey"));
        getUserTickets(id, async (err, data) => {
          try {
            await response.status(200).json(data)
          } catch (e) {
            console.log(e)
          }
        })

      } catch (e) {
        response.status(500).json({message: "Oups! Smth went wrong. Try again later"})
      }
    })

ticketRouter.post("/buyTicket", async (request, response) => {
      try {
        const body = request.body;
        const {id} = jwt.verify(body.token, config.get("jwtSecretKey"));
        buyTicket(body.concertId,id,body.sectorId,body.count, async (err, data) => {
          try {
            await response.status(200).json(data)
          } catch (e) {
            console.log(e)
          }
        })
      } catch (e) {
        response.status(500).json({message: "Oups! Smth went wrong. Try again later"})
      }
    })
ticketRouter.post("/getConcertTickets", async (request, response) => {
  try {
        const {id} = request.body;
        getConcertTickets(id, async (err, data) => {
          try {
            await response.status(200).json(data)
          } catch (e) {
            console.log(e)
          }
        })

      } catch (e) {
        response.status(500).json({message: "Oups! Smth went wrong. Try again later"})
      }
})


module.exports = ticketRouter