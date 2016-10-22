import React, { Component } from 'react';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchUsers();
    }

    mapUsers(users) {
        return users.map(userName => <li key={userName}>{userName}</li>);
    }

    render() {
        const { testString } = this.props;

        return (
            <div id="admin" className="container">
                {testString}
                <ul>
                    {this.mapUsers(this.props.users)}
                </ul>
            </div>
        );
    }
}

export default Admin;