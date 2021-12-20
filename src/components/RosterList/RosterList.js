import React, { useState, useEffect }  from 'react'
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
      console.log("Setting usersList to: " + usersList)
    }
     getUsers();
  }, [])

    useEffect(() => {
      async function getRosters(leagueId) {
      const response = await fetch(`https://api.sleeper.app/v1/league/${params.leagueId}/rosters`);
      const rostersList = await response.json();
      setRostersList(rostersList);
      console.log("Setting rosters list to: " + usersList)
    }
     getRosters();
  }, [])
  
  return (
    <div className="players-list">
        <h1>This is the roster list</h1>
        {usersList != null ? 
        usersList.map((user) => (
          <div className="users-list" key={user.user_id}>
            {/* <label>{user.username}</label> */}
            <label>{user.display_name}</label>
            <label> ({user.metadata.team_name})</label>
          </div>
        )) : null}

        {rostersList != null ? 
        rostersList.map((roster) => (
          <div className="users-list" key={roster.roster_id}>
            {/* <label>{user.username}</label> */}
            <label>Owner ID: {roster.owner_id}</label>
            <label>Wins: {roster.settings.wins}</label>
            <label>Losses: {roster.settings.losses}</label>
          </div>
        )) : null}

    </div>
  );
}

//TODO: Look into using promise chain here
async function fetchUsers(leagueId) {
    const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`);
    const userList = await response.json();
    console.log(`Fetching users in league ${leagueId}:  ${userList}`);
    return userList;
}

//TODO: Look into using promise chain here
async function fetchRosters(leagueId) {
    const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`);
    const rosterList = await response.json();
    console.log(`Fetching rosters in league ${leagueId}:  ${rosterList}`);
    return rosterList;
}

export default RosterList;