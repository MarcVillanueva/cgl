import React, {Component} from 'react'
import LeagueList from './components/LeagueList/LeagueList'
import { useNavigate, useLocation, useParams } from "react-router-dom";

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {leagueListInformation: null}
    }
    render() {
    return (
        <div className="div">
            <div>
                <h1>UserInformation component</h1>
            </div>
            <div>
                {this.state.leagueListInformation != null ? <LeagueList leagues={this.state.leagueListInformation} />: null}
            </div>
        </div>
    );
    }

    async componentWillMount() {
        let {username} = this.props.params;
        var userInformation = await fetchUserInformation(username);
        this.setState({
            leagueListInformation: await fetchLeagueList(userInformation.user_id),
         });
        console.log(this.state.leagueListInformation);
    }
}

//TODO: Look into using promise chain here
async function fetchLeagueList(userId) {
    const response = await fetch('https://api.sleeper.app/v1/user/' + userId + '/leagues/nfl/2021');
    const leagueListInformation = await response.json();
    return leagueListInformation;
}

//TODO: Look into using promise chain here
async function fetchUserInformation(username) {
    const response = await fetch('https://api.sleeper.app/v1/user/' + username);
    const userInformation = await response.json();
    return userInformation;
}

export default function(props) {
  const navigation = useNavigate();
  const location = useLocation();
  const params = useParams();

  return <UserInformation {...props} navigation={navigation} location={ location } params={ params }/>;
}