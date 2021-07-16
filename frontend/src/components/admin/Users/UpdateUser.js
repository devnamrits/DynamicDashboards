import React, { useState } from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function UpdateUser(props) {
    const classes = useStyles();
    const [id, setid] = useState()
    const [name, setname] = useState();
    const [age, setage] = useState();
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();

        const data = {
            _id: id,
            name: name,
            age: age,
        }
        console.log("Data: ", data);

        axios
            .put('http://localhost:2000/' + props.pdata._id, data)
            .then(res => {
                setid();
                setname();
                setage();
                history.push('/');
            })
            .catch(err => {
                console.log("Error in creating user!");
            })
    }

    return (
        <div>
            <form onSubmit={submit} className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Userid"
                        name="id"
                        type="string"
                        helperText="UserId of the user"
                        value={props.pdata._id}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="standard-required"
                        label="Name"
                        name="name"
                        type="string"
                        helperText="Name of the user"
                        value={name}
                        onChange={e => setname(e.target.value)}
                    />
                    <TextField
                        id="standard-required"
                        label="Age"
                        name="age"
                        type="number"
                        helperText="Age of the user"
                        value={age}
                        onChange={e => setage(e.target.value)}
                    />
                </div>
                <Button type="submit" color="primary">
                    Add
                </Button>
            </form>
        </div>
    )
}