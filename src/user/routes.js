const { Router} = require ("express")
const userRouter = Router();
const {createUser, listUser, deleteUser, editEmail} = require("./controllers")

userRouter.post("/", createUser)// http verb, path and controller    // taking create user from controlls

userRouter.get("/", listUser)

userRouter.delete("/:username", deleteUser)

userRouter.put("/", editEmail)

module.exports = userRouter;