const {Router} = require("express")
const authRouter = Router()
const jwt = require("jsonwebtoken")
const {check, validationResult} = require('express-validator')
const {getUserByEmail, setUser} = require('../models/users.js')
const doSha1 = require('sha1')
const config = require("config")

authRouter.post("/register",
    [
      check('email', 'Incorrect Email').isEmail(),
      check('password', "minLength is 6").isLength({min: 6})
    ]
    , async (request, response) => {
      try {
        const errors = validationResult(request)
        if (errors.errors.length !== 0) {
          return response.status(400).json({message: "user add error"})
        }

        const {email, password, name, sname} = request.body;

        getUserByEmail(email, async (err, data) => {
          try {
            if (!data) {
<<<<<<< HEAD
              const hashedPassword = password;
              //const hashedPassword = await bcrypt.hash(password, 7) //will add soon
              setUser(email, name, sname, hashedPassword, (err, data) => {
                response.json({message: "Register success!"})
=======
              //const hashedPassword = password;
              const hashedPassword = doSha1(doSha1(doSha1(password))) //will add soon
              console.log('register',hashedPassword)
              setUser(email, name, sname, hashedPassword, (err) => {
                if(err)
                  response.status(404).json({message: "Oups! Smth went wrong. Try again later."})
                else
                response.json({message: "Register success! Please, confirm your Account in message sended to your Email!"})
>>>>>>> cf3d048... small update, start making eMail confirming
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
<<<<<<< HEAD

                  const hashedPassword = password //await bcrypt.hash(password, 7)
                  if (hashedPassword === data.password) {
=======
                  const hashedPassword = doSha1(doSha1(doSha1(password)))
                  console.log(hashedPassword)
                  console.log(data.password)
                  if (hashedPassword === data.password && data.isApproved) {
>>>>>>> cf3d048... small update, start making eMail confirming
                    let token = jwt.sign({
                          email: email,
                          id: data.id,
                        },
                        config.get("jwtSecretKey"),
                        {expiresIn: "1h"})
                    response.json({token: token, id: data.id, message: "You are loggined in"})
                  } else {
<<<<<<< HEAD
                    await response.status(500).json({message: "Oups! Check your data and try again"})
=======
                    if (!data.isApproved) {
                      await response.status(500).json({message: "Approve your account!"})
                    }
                    else
                      await response.status(500).json({message: "User not found or password is incorrect. Please, check your data and try again!"})
>>>>>>> cf3d048... small update, start making eMail confirming
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