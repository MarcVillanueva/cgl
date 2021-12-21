import React, { useState, useEffect, Fragment }  from 'react'
import { useParams } from 'react-router-dom'
import './RosterList.css'

const RosterList = (props) => {
  const [usersList, setUsersList] = useState(null);
  const [rostersList, setRostersList] = useState(null);
  var params = useParams();

  useEffect(() => {
      async function getUsers(leagueId) {
      const response = await fetch(`https://api.sleeper.app/v1/league/${params.leagueId}/users`);
      const usersList = await response.json();
      setUsersList(usersList);
    }
     getUsers();
  }, [])

    useEffect(() => {
      async function getRosters(leagueId) {
      const response = await fetch(`https://api.sleeper.app/v1/league/${params.leagueId}/rosters`);
      const rostersList = await response.json();
      setRostersList(rostersList);
    }
     getRosters();
  }, [])
  
  return (
    <div>
      <br />
      <div className="players-list">
        <label className="rosters-label">Rosters</label>
          {usersList != null ? 
          usersList.map((user) => (
            <div> 
              <div className="users-list" key={user.user_id}>
              <label>{`${user.display_name}` }</label>
              <Fragment>&nbsp;</Fragment>
              {user.metadata.team_name !== undefined ? <label>({user.metadata.team_name})</label> : null}
              <br />
              {getStandings(user.user_id)}
            </div>
            <br />
            </div>
          )) : null}
      </div>
      <br />
    </div>

  );

  function getStandings(userId) {
    if (rostersList) {
      var roster = rostersList.find(item => item.owner_id === userId)
      return <label>{roster?.settings.wins}-{roster?.settings.losses}</label>
    }

    return null;
  }
}

export default RosterList;