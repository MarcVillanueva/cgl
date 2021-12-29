import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import './DraftOrder.css';
import DraftPick from './../DraftPick/DraftPick'

const DraftOrder = (props) => {
  let playerIdOrderList = [];
  const [league, setLeagueUsers] = useState(null);

  const [rosterSize, setRosterSize] = useState(0);
  const [totalRosters, setTotalRosters] = useState(0);
  const picksRef = useRef(null);
  const rostersRef = useRef(null);

  useEffect(() => {
    async function getLeagueUsers(leagueId) {
      const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`);
      const leagueUsers = await response.json();
      setLeagueUsers(leagueUsers);
    }
    getLeagueUsers(props.leagueId);
  }, [props.leagueId])

  useEffect(() => {
      async function getRosterSize(leagueId) {
      const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}`);
      const league = await response.json();
      setRosterSize(league.roster_positions.length);
      setTotalRosters(league.total_rosters)
      picksRef.current.style.setProperty("--grid-size", rosterSize);
      rostersRef.current.style.setProperty("--total-rosters", totalRosters);
    }
    getRosterSize(props.leagueId);
  }, [props.leagueId, rosterSize, totalRosters]);
  
  if (props.order) {
    for (const [playerId, playerOrder] of Object.entries(props.order)) {
      playerIdOrderList.push(
        {
          player_id: playerId,
          player_order: playerOrder
        }
      )
    }
  }

  playerIdOrderList.sort(function(a, b) {
    return a.player_order - b.player_order;
  })

  const teamSize = playerIdOrderList.length
  return(
    // TODO: Separate these into two components DraftOrder and DraftPicks to make it more readable
    <div >
      <div ref={rostersRef} className="draft-order">
        {playerIdOrderList != null && isEven(teamSize) ? 
        playerIdOrderList.map((player) => (
            <div className="roster"> 
                  <label>{player.player_order}</label>
                  <br />
                  {league != null ? <label>{league.find(user => user.user_id === player.player_id).display_name}</label> : null}
                </div>         
        )) : null}
      </div>
      <div ref={picksRef} className={`draft-picks`}>
        {props.draftPicks != null && isEven(teamSize)? 
        props.draftPicks.map((pick) => (
              <Link
              to={{
                pathname: `/`
              }}>
                <div>
                  <DraftPick pick={pick}></DraftPick>
                </div>
          </Link>
        )) : null}
      </div>
    </div>
  )
};

function isEven(n) {
   return n % 2 === 0;
}

DraftOrder.propTypes = {};

DraftOrder.defaultProps = {};

export default DraftOrder;
