import React from 'react'
import { useNavigate } from "react-router-dom";

class FormPlayerSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    username: ""
  }
  }

  render() {
      return  (
        <div>
          <input type="text" value={this.state.username} onChange={this.handleInputChanged.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
          <button onClick={this.handleSubmit.bind(this)}>
            Submit
          </button>
        </div>
    );
  }

  handleInputChanged(event) {
    this.setState({
      username: event.target.value
    });
  }


  async handleSubmit() {
    var username = this.state.username;
    var userInformation = await fetchUserInformation(username);
    this.props.navigation("/user/" + username, { state: {userId: userInformation.user_id} });
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }
  
}

//TODO: Look into using promise chain here
async function fetchUserInformation(username) {
    const response = await fetch('https://api.sleeper.app/v1/user/' + username);
    const userInformation = await response.json();
    return userInformation;
}

// Wrapping FormPlayerSearch class in a function component to use useNavigate hook. 
// TODO: Might need to update this code. See https://reactnavigation.org/docs/use-navigation/ 
export default function(props) {
  const navigation = useNavigate();

  return <FormPlayerSearch {...props} navigation={navigation} />;
}