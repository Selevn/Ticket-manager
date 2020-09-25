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
      check('password', "Minimal password length is 6").isLength({min: 6})
    ]
    , async (request, response) => {
      try {
        const errors = validationResult(request)
        if (errors.errors.length !== 0) {
          await response.status(404).json({message: errors.errors[0].msg})
        }

        const {email, password, name, sname} = request.body;

        getUserByEmail(email, async (err, data) => {
          try {
            if (!data) {
              const hashedPassword = password;
              //const hashedPassword = await bcrypt.hash(password, 7) //will add soon
              setUser(email, name, sname, hashedPassword, (err) => {
                if(err)
                  response.status(404).json({message: "Oups! Smth went wrong. Try again later."})
                response.json({message: "Register success! Please, confirm your Account in message sended to your Email!"})
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
      check('password', "Minimal password length is 6").isLength({min: 6})
    ]
    , async (request, response) => {
      try {
        const errors = validationResult(request)
        if (errors.errors.length !== 0) {
          await response.status(404).json({message: errors.errors[0].msg})
        }
        const {email, password} = request.body;

        getUserByEmail(email, async (err, data) => {
              try {
                if (!data) {
                  await response.status(500).json({message: "User not found or password is incorrect. Please, check your data and try again!"})
                } else {
                  const hashedPassword = password //await bcrypt.hash(password, 7)
                  if (hashedPassword === data.password && data.isApproved) {
                    let token = jwt.sign({
                          email: email,
                          id: data.id,
                          userType: data.userType,
                        },
                        config.get("jwtSecretKey"),
                        {expiresIn: "1h"})
                    await response.status(218).json({
                      token: token,
                      id: data.id,
                      userType: data.userType,
                      message: "You are loggined in"
                    })
                  } else {
                    if (!data.isApproved) {
                      await response.status(500).json({message: "Approve your account!"})
                    }
                    await response.status(500).json({message: "User not found or password is incorrect. Please, check your data and try again!"})
                  }
                }
              } catch
                  (e) {
                console.log(e)
              }
            }
        )

      } catch (e) {
        console.log("e",e)
        response.status(500).json({message: "Oups! Smth went wrong. Try again later"})
      }
    })


module.exports = authRouter