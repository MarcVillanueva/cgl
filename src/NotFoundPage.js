import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './styles/NotFoundPage.css'
import NotFoundImage from './assets/richard_sherman_not_found.png'

function NotFoundPage(props) {
  return (
    <div >
        <SearchBar></SearchBar>
        <img 
        className="not-found-image"
        src={NotFoundImage}
        />
    </div>
  );
}

export default NotFoundPage;