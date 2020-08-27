const {Router} = require("express")
const authRouter = Router()
const jwt = require("jsonwebtoken")
const {check, validationResult} = require('express-validator')
const {getUserByEmail, setUser} = require('../models/users.js')
const bcrypt = require('bcryptjs')
const config = require("config")

authRouter.post("/register",
    [
      check('email', 'Incorrect Email').isEmail(),
      check('password', "minLength is 6").isLength({min: 6})
    ]
    , async (request, response) => {
      try {
        const errors = validationResult(request)
        console.log(errors.errors.length,"valid errors")
        if (errors.errors.length !== 0) {
          return response.status(400).json({message: "user add error"})
        }

        const {email, password, name, sname} = request.body;

        getUserByEmail(email, async (err, data) => {
          try {
            if (!data) {
              const hashedPassword = password;
              //const hashedPassword = await bcrypt.hash(password, 7)
              setUser(email, name, sname, hashedPassword, (err, data) => {
                console.log(err, "err")
                console.log(data, "data")
                response.json({message:"Register success!"})
              })
            } else {
              response.status(500).json({message: "Oups! This email is already in use"})
            }
          } catch (e) {
            console.log(e)
          }
        })

      } catch (e) {
        response.status(500).json({message: "Oups! Smth went wrong. Try again later"})

      }
    })
authRouter.post("/login",
    [
      check('email', 'Incorrect Email').normalizeEmail().isEmail(),
      check('password', "minLength is 6").isLength({min: 6})
    ]
    , async (request, response) => {
      try {
        console.log(request.body.email)
        console.log(request.body.password)
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
          return await response.status(400).json({message: "user login error"})
        }
        const {email, password} = request.body;

        getUserByEmail(email, async (err, data) => {
              try {
                if (!data) {
                  await response.status(500).json({message: "Oups! Check your data and try again"})
                } else {

                  console.log(data.password)
                  const hashedPassword = password //await bcrypt.hash(password, 7)
                  console.log(hashedPassword)
                  if (hashedPassword === data.password) {
                    let token = jwt.sign({
                          email: email,
                        },
                        config.get("jwtSecretKey"),
                        {expiresIn: "1h"})
                    response.json({token: token, email: email,message:"You are loggined in"})
                  } else {
                    await response.status(500).json({message: "Oups! Check your data and try again"})
                  }
                }
              } catch
                  (e) {
                console.log(e)
              }
            }
        )

      } catch (e) {
        response.status(500).json({message: "Oups! Smth went wrong. Try again later"})
      }
    })



module.exports = authRouter