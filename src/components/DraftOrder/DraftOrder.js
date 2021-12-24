import React, { useState, useEffect, Fragment } from 'react';
import './DraftOrder.css';

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

  return(
    <div className="pick-order-parent">
      {playerIdOrderList != null ? 
      playerIdOrderList.map((player) => (
          <div className="pick-order"> 
              <div > 
                <label>{player.player_order}</label>
                <br />
                {league != null ? <label>{league.find(user => user.user_id === player.player_id).display_name}</label> : null}
                <br></br>
              </div>         
          </div>
      )) : null}
    </div>
  )
};

DraftOrder.propTypes = {};

DraftOrder.defaultProps = {};

export default DraftOrder;
