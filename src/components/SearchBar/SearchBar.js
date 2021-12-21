import React from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      username: ""
    }
  }

  render() {
    var username = this.props.name ? this.props.name : "";
    return (
        <div>
          <div className="navbar-container">
            <div className="navbar">
              <div >
                <Link className="logo-section" to='/'>Sleeper</Link >
              </div>
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
              {<div className="actions-section">{username}</div>}
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
    if (this.state.username.trim() !== "") 
        this.props.navigation("/user/" + this.state.username + "/");
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
