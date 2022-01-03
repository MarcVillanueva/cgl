import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './styles/NotFoundPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import RosterList from './components/RosterList/RosterList'
import DraftChart from './components/DraftChart/DraftChart'
import './styles/LeagueInformationPage.css'
import LeagueOptions from './components/LeagueOptions/LeagueOptions'
import PlayoffBracket from './components/PlayoffBracket/PlayoffBracket'
import Collusion from './components/Collusion/Collusion'
import Weeklys from './components/Weeklys/Weeklys'

const LeagueInformationPage = (props) => {
  var params = useParams();
  const [leagueName, setLeagueName] = useState(null);
  const [leagueAvatar, setLeagueAvatar] = useState("");
  const [selectedOption, setSelected] = useState("Rosters");

  useEffect(() => {
    async function getLeagueName() {
      const response = await fetch(`https://api.sleeper.app/v1/league/${params.leagueId}`)
      const league = await response.json()
      setLeagueName(league.name)
      setLeagueAvatar(league.avatar)
  }
  getLeagueName();
  }, [params.leagueId])

  return (
    <div className="league-information">
        <SearchBar navigation={useNavigate()} params={params} name={leagueName} avatar={leagueAvatar}></SearchBar>
        <br />
        <div className="league-option-tabs">
          <LeagueOptions selectedOption={selectedOption} setSelected={setSelected}></LeagueOptions>
        </div>
        <div className={selectedOption === "Draft" || selectedOption === "Results" || selectedOption === "Collusion" ? "league-option-panel-rounded" : "league-option-panel"}>
          {selectedOption === "Rosters" ? <RosterList leagueId={params.leagueId}></RosterList> : null}
          {selectedOption === "Draft" ? <DraftChart leagueId={params.leagueId}></DraftChart> : null}
          {selectedOption === "Results" ? <PlayoffBracket leagueId={params.leagueId}></PlayoffBracket> : null}
          {selectedOption === "Collusion" ? <Collusion leagueId={params.leagueId}></Collusion> : null}
          {selectedOption === "Weeklys" ? <Weeklys leagueId={params.leagueId}></Weeklys> : null}
        </div>
        <br />
    </div>
  );
}

export default LeagueInformationPage;