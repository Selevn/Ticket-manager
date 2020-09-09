const {Router} = require("express")
const concertRouter = Router()
const {getAllConcerts} = require('../models/concerts.js')

concertRouter.post("/getAllConcerts", async (request, response) => {
  try {
    getAllConcerts(async (err, data) => {
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


module.exports = concertRouter