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


exports.updateGroup = (req, res) => {
    console.log('updateGroup ran')
    Group.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json({ msg: 'Updated Successfully' }))
        .catch(err => res.status(400).json({ error: "Unable to update" }))
}
