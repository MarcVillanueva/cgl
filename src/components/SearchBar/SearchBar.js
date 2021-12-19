import React from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search'

class SearchBar extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      username: ""
    }
  }

  render() {
    return (
        <div>
          <div className="navbar-container">
            <div className="navbar">
              <div className="logo-section">Sleeper</div>
              <div className="searchbar-section">
                <input id="searchbar" type="text" autoComplete="off" value={this.state.username} onChange={this.handleInputChanged.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
                {
                  this.state.username === "" && (
                
                <div className="searchbar-placeholder" onClick={(e) => {
                  document.getElementById("searchbar")?.focus()
                  }}>
                  <SearchIcon id="Searchbar-placeholder-icon"></SearchIcon>
                  <span className="searchbar-placeholder-text">Search</span>
                </div>
                  )
                }
              </div>
              <div className="actions-section">Actions</div>
            </div>
          </div>
        </div>
    )
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




SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
