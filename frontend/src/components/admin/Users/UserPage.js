import { React } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route} from "react-router-dom";
import UsersDisplay from "./UsersDisplay";
import UserDetail from "./UserDetail";

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function UserPage() {

    const classes = useStyles();
    return (
        <Router>
            <Route exact path='/' component = {UsersDisplay}/>
            <Route path='/user-detail/:id' component= {UserDetail}/>
        </Router>
    )
}