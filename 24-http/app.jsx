import {render} from 'react-dom';
import React, {Component} from 'react';
import ListUser from "./ListUser/ListUser";
import AddUser from "./AddUser/AddUser";
import './conf/axios-conf';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            selectedUser: null
        }
    }

    componentDidMount() {
        axios.get('/users')
            .then(response => {
                const users = response.data;
                this.setState({users});
            }).catch(err => console.log(err));
    }

    handleAddUser = (user) => {
        const users = this.state.users.concat(user)
        this.setState({users})
    }

    selectUser = (index) => {
        this.setState({
            selectedUser: index
        })
    }

    deleteUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                this.props.adduser(response.data);
            })
    }

    render() {
        return (
            <div style={{minHeight: '100vh'}}
                 className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
                <AddUser user={this.state.users && this.state.users[this.state.selectedUser] ?
                    this.state.users[this.state.selectedUser] : null} adduser={this.handleAddUser}/>
                <hr className={"w-100 my-5"}/>
                <ListUser users={this.state.users}
                          selectedUser={this.selectUser}
                          selected={this.state.users[this.state.selectedUser]}
                          deleteUser={this.deleteUser}
                />
            </div>
        );
    }
}

render(
    <App/>,
    document.getElementById('root')
);
