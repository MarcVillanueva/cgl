import React from 'react'
import { useNavigate } from "react-router-dom"
import "./FormPlayerSearch.css"
import SearchIcon from '@material-ui/icons/Search'

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
          <div className="navbar-container">
            <div className="navbar">
              <div className="logo-section">Sleeper</div>
              <div className="searchbar-section">
                <input id="searchbar" type="text" value={this.state.username} onChange={this.handleInputChanged.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
                {
                  this.state.username === "" && (
                
                <div className="searchbar-placeholder" onClick={(e) => {
                  document.getElementById("searchbar")?.focus()
                  }}>
                  <SearchIcon id="Searchbar-placeholder-icon"></SearchIcon>
                  <span>Search</span>
                </div>
                  )
                }
              </div>
              <div className="actions-section">Actions</div>
            </div>
          </div>
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
    this.props.navigation("/user/" + username + "/");
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }
  
}
// Wrapping FormPlayerSearch class in a function component to use useNavigate hook. 
// TODO: Might need to update this code. See https://reactnavigation.org/docs/use-navigation/ 
export default function(props) {
  const navigation = useNavigate();

  return <FormPlayerSearch {...props} navigation={navigation} />;
}