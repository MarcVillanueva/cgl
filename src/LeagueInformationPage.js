import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './styles/NotFoundPage.css'
import { useNavigate, useParams } from 'react-router-dom';

function LeagueInformationPage(props) {
  return (
    <div >
        <SearchBar navigation={useNavigate()} params={useParams()}></SearchBar>
        <h1>League information page!</h1>
    </div>
  );
}

export default LeagueInformationPage;