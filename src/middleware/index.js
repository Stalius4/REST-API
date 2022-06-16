const bcrypt = require("bcryptjs")

exports.hashPassword = async (req, res, next) => { // 
    try {
        next()// move to next function 
    } catch (error) {
        console.log(error)
    }
}