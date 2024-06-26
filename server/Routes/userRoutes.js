// User Routes
const express = require('express')
const userRouter = express.Router()
const {
  registerUser,
  updateUser,
  loginUser
} = require('../Controllers/userController')
const verifyUser = require('../Middlewares/verifyUser')
const payMoney = require('../Controllers/paystackController')

userRouter.post('/user-register', registerUser)
userRouter.post('/user-login', loginUser)
userRouter.put('/user-update/:id', verifyUser, updateUser)
userRouter.post('/make-payment', payMoney)

module.exports = userRouter
