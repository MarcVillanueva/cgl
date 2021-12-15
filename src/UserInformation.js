import React, {Component} from 'react'
import League from './components/League/League'

class UserInformation extends Component {
    render() {
    return (
        <div className="div">
            <h1>UserInformation component</h1>
            {/* TODO: Add LeagueList component here */}
            {/* Need to pass in list of leagues for specific user */}
            <League></League>
        </div>
    );
    }

    componentDidMount() {
        console.log("UserInformation component mounted!");
    }
}

export default UserInformation