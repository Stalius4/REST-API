const User = require("./model")

exports.createUser = async (req, res) => {
  //req request , res response
  try {
    const userObj = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    const newUser = await User.create(userObj);
    res.send({ newUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.listUser = async (req, res) => {
    try {
        const result = await User.find({})
        res.send({result})
        console.log(result)
    } catch (error) {
        res.send({error})
        
    }
}

exports.deleteUser = async(req, res) => {
  try {
    const userObj = {
      username: req.params.username}// key word params to find specific user from when you type in url
      console.log(userObj)
  const result  = await User.deleteOne(userObj)
  if(result.deleteCount === 0 ) {
    console.log("User not found")
  }
     res.send({result})
  } catch (error) {
    res.send({error})
  }
}