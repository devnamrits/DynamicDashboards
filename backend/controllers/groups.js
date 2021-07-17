const Group = require('../models/groupModel');
const User = require('../models/userModel');

exports.createGroup = (req, res) => {
    console.log("createGroup ran");
    console.log(req.body);
    Group.create(req.body)
        .then(group => res.json({ msg: 'Group added Successfully' }))
        .catch((err) => {
            console.log(err);
        })
}


exports.updateGroup = (req, res) => {
    console.log('updateGroup ran')
    Group.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json({ msg: 'Updated Successfully' }))
        .catch(err => res.status(400).json({ error: "Unable to update" }))
}

exports.addUserInGroup = (req, res) => {
    console.log('add user in group ran')
    Group.findByIdAndUpdate(req.params.id, { $push: { users: req.body.userid } })
        .then(group => res.json({ msg: "User added successfully" }))
        .catch((err) => {
            console.log(err);
        })
}

exports.deleteUserInGroup = (req, res) => {
    console.log('delete user in group ran');
    var id = req.body.userid;
    let userPresent = false;
    console.log(id);
    User.count({_id: id},(err,count) => {
        if(count>0)
            userPresent = true;
    })
    if(userPresent){
        Group.findByIdAndUpdate(req.params.id, { $pull: { users: req.body.userid } })
            .then(group => res.json({ msg: "User deleted successfully" }))
            .catch((err) => {
                console.log(err);
            })
    }
    else{
        res.json({msg: "User not found"});
    }
    

}