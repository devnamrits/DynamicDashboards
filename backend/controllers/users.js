const User = require('../models/userModel')

exports.createUser = (req, res) => {
    console.log("Create user ran");
    console.log(req.body)
    User.create(req.body)
        .then(user => res.json({ msg: 'User added Successfully' }))
        .catch((err) => {
            //console.log(err);
            if (err.code === 11000)
                res.status(400).json({ error: 'User already exist' })
            else
                res.status(400).json({ error: 'Unable to add user' })
        })
}

exports.userList = (req, res) => {
    console.log('userList ran');
    User.find({}, (err, users) => {
        var userMap = {};

        users.forEach((user) => {
            userMap[user._id] = user;
        });

        res.send(userMap);
    })
}

exports.viewUser = (req, res) => {
    console.log('viewUser ran')
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ nouserfound: 'No user found' }))
}

exports.updateUser = (req, res) => {
    console.log('updateUser ran')
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json({ msg: 'Updated Successfully' }))
        .catch(err => res.status(400).json({ error: "Unable to update" }))
}

exports.deleteUser = (req, res) => {
    console.log('deleteUser ran')
    User.findByIdAndDelete(req.params.id, req.body)
        .then(user => res.json({ msg: 'Deleted Successfully' }))
        .catch(err => res.status(400).json({ error: "Unable to delete" }))
}