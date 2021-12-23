import { SortByAlphaRounded } from '@material-ui/icons';
import React from 'react';
import styles from './DraftOrder.css';

const DraftOrder = (props) => {
  let playerOrderList = [];

  if (props.order) {
      for (const [playerId, playerOrder] of Object.entries(props.order)) {
        console.log("playerId:" + playerId)
        playerOrderList.push(
          {
            player_id: playerId,
            player_order: playerOrder
          }
        )
      }
  }

  playerOrderList.sort(function(a, b) {
    return a.player_order - b.player_order;
  })

  // console.log(sortedPlayerOrder)
  return(
    <div>
      {playerOrderList != null ? 
      playerOrderList.map((order) => (
          <div > 
              <div>
                <label>{order.player_id}</label>
                <br></br>
                <label>{order.player_order}</label>
              </div>         
          </div>
      )) : null}
    </div>
  )
};


async function getUsernameById(userId) {
  if (userId) {
    const user = await fetch(`https://api.sleeper.app/v1/user/${userId}`);
    if (user) {
      console.log("Username: " + user?.username)
      return user.username
    }
  }
  return null;
}

DraftOrder.propTypes = {};

DraftOrder.defaultProps = {};

export default DraftOrder;
