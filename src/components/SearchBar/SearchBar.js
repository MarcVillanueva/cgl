import React from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom';
import DefaultLogo from '../../assets/default_league_logo.png'
import Select from 'react-select'

{/* TODO: How to dynamically populate options. Minimum value:2014, Max value: current year */}
const options = [
  { value: '2014', label: '2014' },
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' }
];

const customStyles = {
  option: provided => ({
    ...provided,
    color: 'black'
  }),
  control: provided => ({
    ...provided,
    color: 'black'
  })
}

const defaultOption = options[options.length - 1].value;

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
              {<div className="actions-section">
                <img
                  src={this.props.avatar === null || this.props.avatar === undefined || this.props.avatar === "" ? DefaultLogo : `https://sleepercdn.com/avatars/thumbs/${this.props.avatar}`}
                  alt="new"
                  className="avatar-searchbar"
                />
                {username}
                </div>}
                {/* TODO: How to dynamically get the current year and assign placeholder */}
              <Select options={options} placeholder={defaultOption} styles={customStyles}/> 
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
