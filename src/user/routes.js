const { Router} = require ("express")
const userRouter = Router();
const {createUser, listUser, deleteUser} = require("./controllers")

userRouter.post("/user", createUser)// http verb, path and controller    // taking create user from controlls

userRouter.get("/user", listUser)

userRouter.delete("/user/:username", deleteUser)

module.exports = userRouter;