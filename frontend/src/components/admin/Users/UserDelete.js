import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import UserDisplay from './UsersDisplay';

export default function UserDelete(props) {

    return (
        <div>
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
            </Alert>
            <UserDisplay />
        </div>
    )

}