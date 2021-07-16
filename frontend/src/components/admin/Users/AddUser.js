import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function FormDialog() {
    const classes = useStyles()
    const [id,setid] = useState()
    const [name,setname] = useState();
    const [age,setage] = useState();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submit = (e) => {
        e.preventDefault();

        const data = {
            _id: id,
            name: name,
            age: age,
        }
        console.log("Data: ",data);

    axios
      .post('http://localhost:2000/createuser', data)
      .then(res => {
          setid();
          setname();
          setage();
          handleClose();
      })
      .catch(err => {
        console.log("Error in creating user!");
      })
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add New User
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add new user to database, please fill the following details.
                    </DialogContentText>
                    <form  onSubmit={submit} className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField
                                id="standard-required"
                                label="Userid"
                                name="id"
                                type="string"
                                helperText="UserId of the user"
                                value = {id}
                                onChange = {e => setid(e.target.value)}
                            />
                            <TextField
                                id="standard-required"
                                label="Name"
                                name="name"
                                type="string"
                                helperText="Name of the user"
                                value = {name}
                                onChange = {e => setname(e.target.value)}
                            />
                            <TextField
                                id="standard-required"
                                label="Age"
                                name="age"
                                type="number"
                                helperText="Age of the user"
                                value = {age}
                                onChange = {e => setage(e.target.value)}
                            />
                        </div>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit"  color="primary">
                                Add
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
                
            </Dialog>
        </div>
    );
}
