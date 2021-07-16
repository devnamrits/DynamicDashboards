import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import AddUser from './AddUser';

const borderValue = '1px solid black';
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
}))



export default function UserDisplay() {

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        fetch("http://localhost:2000/userlist", {
            method: 'GET',
            mode: 'cors',
        })
            .then(res => res.clone().json())
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
                <TableContainer component={Paper}>
                    <AddUser />
                    <h1>User Details</h1>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(
                                (item, index) => (
                                    <TableRow>
                                        <TableCell>{item._id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.age}</TableCell>
                                        <TableCell>
                                            <Link to={`/user-detail/${item._id}`}>
                                                <Button variant="contained" color="primary">
                                                    View User
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
