import React, {Component} from 'react'

class UserInformation extends Component {
    render() {
    return (
        <h1>UserInformation component</h1>
    );
    }

    componentDidMount() {
        console.log("UserInformation component mounted!");
    }
}

export default UserInformation