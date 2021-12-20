import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './styles/NotFoundPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import RosterList from './components/RosterList/RosterList'
import './styles/LeagueInformationPage.css'

const LeagueInformationPage = (props) => {
  var params = useParams();
  return (
    <div >
        <SearchBar navigation={useNavigate()} params={useParams()}></SearchBar>
        <RosterList leagueId={params.leagueId}></RosterList>
    </div>
  );
}

export default LeagueInformationPage;