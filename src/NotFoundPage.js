import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './styles/NotFoundPage.css'
import { useNavigate, useParams } from 'react-router-dom';

function NotFoundPage(props) {
  return (
    <div style={{textAlign:"center"}}>
        <SearchBar navigation={useNavigate()} params={useParams()}></SearchBar>
        <br />
        <h1 className="not-found-label">User not found</h1>
    </div>
  );
}

export default NotFoundPage;