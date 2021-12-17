import React from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = () => (
      <div>
        <div className="navbar-container">
          <div className="navbar">
            <div className="logo-section">Sleeper</div>
            <div className="searchbar-section">
              <input id="searchbar" type="text" autoComplete="off"/>
              <div className="searchbar-placeholder" onClick={(e) => {
                document.getElementById("searchbar")?.focus()
                }}>
                <SearchIcon id="Searchbar-placeholder-icon"></SearchIcon>
                <span>Search</span>
              </div>
            </div>
            <div className="actions-section">Actions</div>
          </div>
        </div>
      </div>
);

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
