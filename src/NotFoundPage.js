import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './styles/NotFoundPage.css'
import NotFoundImage from './assets/richard_sherman_not_found.png'
import { useNavigate, useParams } from 'react-router-dom';

function NotFoundPage(props) {
  return (
    <div >
        <SearchBar navigation={useNavigate()} params={useParams()}></SearchBar>
        <img 
        className="not-found-image"
        src={NotFoundImage}
        />
    </div>
  );
}

export default NotFoundPage;