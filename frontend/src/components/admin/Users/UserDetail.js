import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

export default function UserDetail(props){
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState("");

    console.log("User detail props", props.match.params.id)

    useEffect(() => {
        fetch("http://localhost:2000/"+props.match.params.id, {
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

    console.log(data);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!loaded) {
        return <div>Loading...</div>;
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
                </Paper>
            </div>
        );
    }
}