import React, {Component} from 'react'
import LeagueList from './components/LeagueList/LeagueList'
import { useNavigate, useLocation } from "react-router-dom";

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {leagueListInformation: ""}
    }
    render() {
    return (
        <div className="div">
            <div>
                <h1>UserInformation component</h1>
            </div>
            {/* TODO: Add LeagueList component here */}
            {/* Need to pass in list of leagues for specific user */}
            <div>
                {/* Pass in array of League names, Avatar Src urls */}
                <LeagueList></LeagueList>
            </div>
        </div>
    );
    }

    async componentWillMount() {
        this.state.leagueListInformation = await fetchLeagueList(this.props.location.state.userId);
        console.log(this.state.leagueListInformation);
    }
}

//TODO: Look into using promise chain here
async function fetchLeagueList(userId) {
    const response = await fetch('https://api.sleeper.app/v1/user/' + userId + '/leagues/nfl/2021');
    const leagueListInformation = await response.json();
    return leagueListInformation;
}

export default function(props) {
  const navigation = useNavigate();
  const location = useLocation();

  return <UserInformation {...props} navigation={navigation} location={ location }/>;
}