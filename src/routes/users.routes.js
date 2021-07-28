const {Router} = require ("express")
const { createUser, getOneUser} = require("../controllers/users.controllers")
const userRouter = Router()

userRouter.post("/users", createUser)
userRouter.post("/users/:username", getOneUser) // http://localhost:5000/users/dfong

module.exports = userRouter