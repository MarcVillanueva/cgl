import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './DraftOrder.css';
import DraftPick from './../DraftPick/DraftPick'

const DraftOrder = (props) => {
  let playerIdOrderList = [];
  const [league, setLeagueUsers] = useState(null);

  useEffect(() => {
  async function getLeagueUsers() {
    const response = await fetch(`https://api.sleeper.app/v1/league/${props.leagueId}/users`);
    const leagueUsers = await response.json();
    setLeagueUsers(leagueUsers);
  }
  getLeagueUsers(props.leagueId);
}, [])

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
    <div className={`draft-picks-${teamSize}`}>
      {playerIdOrderList != null && isEven(teamSize) ? 
      playerIdOrderList.map((player) => (
          <div > 
              <div > 
                <label>{player.player_order}</label>
                <br />
                {league != null ? <label>{league.find(user => user.user_id === player.player_id).display_name}</label> : null}
                <br></br>
              </div>         
          </div>
      )) : null}
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
  )
};

function isEven(n) {
   return n % 2 == 0;
}

DraftOrder.propTypes = {};

DraftOrder.defaultProps = {};

export default DraftOrder;
