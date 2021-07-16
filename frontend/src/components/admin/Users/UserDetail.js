import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserDelete from './UserDelete';
import { useHistory } from 'react-router-dom';
import UpdateUser from "./UpdateUser";


export default function UserDetail(props) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState("");
    const [deleted, setDeleted] = useState(false);
    const [update,setUpdate] = useState(false);
    const history = useHistory();

    console.log("User detail props", props.match.params.id)

    useEffect(() => {
        fetch("http://localhost:2000/" + props.match.params.id, {
            method: 'GET',
            mode: 'cors',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setLoaded(true);
                    setData(result);
                },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            );
    }, [])

    const handleDelete = () => {
        axios.delete('http://localhost:2000/' + data._id)
            .then((res) => {
                console.log(res);
                setDeleted(true);
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleUpdate = () => {
        setUpdate(true);
    }

    console.log(data);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!loaded) {
        return <div>Loading...</div>;
    } else if (deleted) {
        return (
            <UserDelete/>
        )
    } else if(update) {
        return (
            <UpdateUser pdata={data} />
        )
    } else {
        return (
            <div>
                <Paper elevation={3}>
                    <p>
                        <h1>User id:</h1><h2>{data._id}</h2>
                    </p>
                    <p>
                        <h1>Name:</h1><h2>{data.name}</h2>
                    </p>
                    <p>
                        <h1>Age:</h1><h2>{data.age}</h2>
                    </p>
                    <Button onClick={handleDelete} variant="contained" color="primary">
                        Delete
                    </Button>
                    <Button onClick={handleUpdate} variant="contained" color="primary">
                        Update
                    </Button>
                </Paper>
            </div>
        );
    }
}