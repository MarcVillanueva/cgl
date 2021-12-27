import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './styles/NotFoundPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import RosterList from './components/RosterList/RosterList'
import DraftChart from './components/DraftChart/DraftChart'
import './styles/LeagueInformationPage.css'
import LeagueOptions from './components/LeagueOptions/LeagueOptions'

const LeagueInformationPage = (props) => {
  var params = useParams();
  const [leagueName, setLeagueName] = useState(null);
  const [selectedOption, setSelected] = useState("Rosters");

  useEffect(() => {
    async function getLeagueName() {
      const response = await fetch(`https://api.sleeper.app/v1/league/${params.leagueId}`);
      const league = await response.json();
      setLeagueName(league.name);
  }
  getLeagueName();
  }, [params.leagueId])

  return (
    <div className="league-information">
        <SearchBar navigation={useNavigate()} params={params} name={leagueName}></SearchBar>
        <br />
        <div className="league-option-tabs">
          <LeagueOptions selectedOption={selectedOption} setSelected={setSelected}></LeagueOptions>
        </div>
        <div className={selectedOption === "Draft" ? "league-option-panel-draft" : "league-option-panel"}>
          {selectedOption === "Rosters" ? <RosterList leagueId={params.leagueId}></RosterList> : null}
          {selectedOption === "Draft" ? <DraftChart leagueId={params.leagueId}></DraftChart> : null}
        </div>
        <br />
    </div>
  );
}

export default LeagueInformationPage;