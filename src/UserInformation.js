import React, {Component} from 'react'
import LeagueList from './components/LeagueList/LeagueList'
import { useNavigate, useLocation, useParams } from "react-router-dom"
import SearchBar from './components/SearchBar/SearchBar'
import './styles/UserInformation.css'

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueListInformation: null,
            username: ""
        }
    }
    
    render() {
    return (
        <div className="div">
            <SearchBar navigation={this.props.navigation}></SearchBar>
            <div>
                {this.state.leagueListInformation != null ? <LeagueList className="league-list" leagues={this.state.leagueListInformation} />: null}
            </div>
        </div>
    );
    }

    // TODO: Duplicate code in componentDidUpdate. Need to update this to a function component to use useEffect hook to avoid duplicate code
    async componentWillMount() {
        let {username} = this.props.params;
        if (this.state.username !== username)
        {
            var userInformation = await fetchUserInformation(username);
            if (userInformation === null) {
                this.props.navigation("/404/");
            }
            else {
                this.setState({
                    leagueListInformation: await fetchLeagueList(userInformation.user_id),
                    username: username
                });
            }
        }
    }

    // TODO: Duplicate code in componentWillMount. Need to update this to a function component to use useEffect hook to avoid duplicate code
    async componentDidUpdate() {
        let {username} = this.props.params;
        if (this.state.username !== username)
        {
            var userInformation = await fetchUserInformation(username);
            if (userInformation === null) {
                this.props.navigation("/404/");
            }
            else {
                this.setState({
                    leagueListInformation: await fetchLeagueList(userInformation.user_id),
                    username: username
                });
            }
        }
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