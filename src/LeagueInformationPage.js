import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './styles/NotFoundPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import RosterList from './components/RosterList/RosterList'
import './styles/LeagueInformationPage.css'

const LeagueInformationPage = (props) => {
  var params = useParams();
  const [leagueName, setLeagueName] = useState(null);

  useEffect(() => {
    async function getLeagueName() {
      const response = await fetch(`https://api.sleeper.app/v1/league/${params.leagueId}`);
      const league = await response.json();
      setLeagueName(league.name);
  }
  getLeagueName();
  }, [])

  return (
    <div >
        <SearchBar navigation={useNavigate()} params={params} name={leagueName}></SearchBar>
        <RosterList leagueId={params.leagueId}></RosterList>
    </div>
  );
}

export default LeagueInformationPage;