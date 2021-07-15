const User = require('../models/userModel')

exports.createUser = (req,res) => {
    console.log("Create user ran");
    console.log(req.body)
    User.create(req.body)
    .then(user => res.json({msg: 'User added Successfully'}))
    .catch((err) => {
        console.log(err);
        res.status(400).json({error: 'Unable to add user'})
    })
}