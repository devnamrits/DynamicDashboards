import { Component } from "react";
import { Table, TableCell, TableContainer, TableRow, TableHead } from '@material-ui/core'



class UsersDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
        };
    }

    componentDidMount() {

        fetch("http://localhost:2000/userlist", {
            method: 'GET',
            mode: 'cors'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        //console.log('Data: ', this.state.data);
    }

    render() {
        const { error, isLoaded, data } = this.state;
        console.log('Data:', this.state.data);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>User Details</h1>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                            </TableHead>
                            {data.map(
                                (item, index) => (
                                    <TableRow>
                                        <TableCell>{item._id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.age}</TableCell>
                                    </TableRow>
                                )
                            )}
                        </Table>
                    </TableContainer>
                    <table >

                    </table>
                </div>
            );
        }
    }

}
export default UsersDisplay;