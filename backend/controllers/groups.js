const Group = require('../models/groupModel');

exports.createGroup = (req,res) => {
    console.log("createGroup ran");
    console.log(req.body);
    Group.create(req.body)
    .then(group => res.json({ msg: 'Group added Successfully' }))
    .catch((err) => {
        console.log(err);
    })
}