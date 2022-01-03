import React, { useEffect, useState, useRef } from 'react';
import './Collusion.css';

const Collusion = (props) => {
// TODO: Fetch matchups in all weeks

// 1. CHECK MISSING POSITION
// For each player check if starts.contains "0". Empty position
// If player contains starter with "0" then add to missing player array { RosterId, MissingPositions[indices of starter with id 0], Week Number}

// 2. CHECK STARTER ON BYE
// For each player check if starter_points contains "0". Then check if corresponding player ID's BYE week === current week
// If player contains starter with "0" then add to missing player array { RosterId, PlayersOnBye[ID of players on BYE], Week Number}
// Users endpoint only returns CURRENT STATUS. No way to check if someone was on BYE on a particular week unless we add a lookup table.
//  -- Can we get this information from some other API and utilize that?

// 3. CHECK STARTER COVID/INJURED. 
// For each player check if starter_points contains "0". Then check if corresponding player ID's status was INJURED/COVID during current week
// If player contains starter with "0" then add to missing player array { RosterId, PlayersOnBye[ID of players on BYE], Week Number}
// Users endpoint only returns CURRENT STATUS. No way to check if someone was on COVID/IR on a particular week unless we add a lookup table.
//  -- Can we get this information from some other API and utilize that?

  const [startWeek, setStartWeek] = useState(null);
  const [missingPositions, setMissingPositions] = useState(null);
  const [usersList, setUsersList] = useState(null);
  const [violatorsList, setViolatorsList] = useState(null);
  const violationChartRef = useRef(null);

  // TODO: Figure out how to get this maxWeekNumber without hardcoding here.
  // - Maybe do playoff_start_week + max(playoff.r in playoffBrackets)
  const maxWeekNumber = 17
  const weekList = new Array(maxWeekNumber).fill(0)

  useEffect(() => {
  async function getStartWeek(leagueId) {
    const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}`);
    const league = await response.json();
    setStartWeek(league.settings.start_week);
  }
  getStartWeek(props.leagueId);
  }, [props.leagueId])

  useEffect(() => {
  async function getMissingPositions(leagueId) {
      const newMissingPositions = []

      const rosters = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`).
                                    then(response => response.json())        
      
      // This operation takes a very long time to complete. Figure out a way to improve execution time
      // - Can we get the rosterList and userList as props from a component which already fetched it?
      for (var weekNumber = startWeek; weekNumber <= maxWeekNumber; weekNumber++) {
        const matchup = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/matchups/${weekNumber}`).
                              then(response => response.json())
       
        const matchupsWithMissingPlayers = matchup?.filter(matchup => matchup.starters.includes("0"))
        
        matchupsWithMissingPlayers?.forEach(function(matchup) {
        var roster = rosters.find(roster => roster.roster_id === matchup.roster_id)
        var user = usersList?.find(user => user.user_id === roster.owner_id)
        newMissingPositions?.push(
          {
            Username: user?.display_name,
            WeekNumber: weekNumber
          }
          )
        })  
      }

      setMissingPositions(newMissingPositions)
  }
  getMissingPositions(props.leagueId);
  }, [props.leagueId])

  useEffect(() => {
  async function getUsersList(leagueId) {    
      const users = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`).
                                  then(response => response.json())
      setUsersList(users)
      console.log("Setting grid-size to " + users.length)
      violationChartRef.current.style.setProperty("--grid-size", users.length);
  }
  getUsersList(props.leagueId);
  }, [props.leagueId])

  useEffect(() => {
  async function getViolatorsList(usersList, missingPositions) {      
      const violatorsList = []

      for (var currentWeek = 1; currentWeek <= maxWeekNumber; currentWeek++) {
          usersList?.forEach(function(user) {
            console.log("Checking for team: " + user.display_name + " Week: " + currentWeek)
            if (missingPositions) {
              console.log("Missing positions count: " + missingPositions.length)
              var match = missingPositions?.find(violator => violator.Username === user.display_name && violator.WeekNumber === currentWeek)
              var hasViolation = match !== undefined
              console.log("Violation: " + hasViolation)
              // TODO: Also push Username, Week, just to be safe
              // Currently these will already be in the correct order but we should do some defensive programming here.
              violatorsList.push( {
                                    HasViolation: hasViolation
                                  })
            }                   
        })
      }

      setViolatorsList(violatorsList)
  }
  getViolatorsList(usersList, missingPositions);
  }, [usersList, missingPositions])

  // console.log("Violators: " + violatorsList)
  // console.log("Violators size: " + violatorsList?.length)

  return (
    <div className="test-class">
      <div className="collusion-team-names-parent">
      {usersList !== null ? 
      usersList.map((user, index) => (
        <div className={index === usersList.length - 1 ? "collusion-team-names-last" : "collusion-team-names"}> 
          <label>{user.display_name}</label>
        </div>
      )) : <h1 className="collusion-loading-text">Checking for collusion...</h1>}
      </div>
    <div className="collusion-report-chart">
      {/* {usersList !== null ? 
      <div>
        <h2 className="missing-starters-text">Missing starters</h2>
      </div>
       : null} */}
      <div className="week-list-column-parent">
      {weekList !== null ? 
        weekList.map((week, index) => (
          <div className={index === weekList.length - 1 ? "week-list-column-child-last" : "week-list-column-child"}> 
            <label>{index + 1 }</label>
          </div>
        )) : null}                                                
      </div>
      <div ref={violationChartRef} className="violation-chart">
      {violatorsList !== null ? 
        violatorsList.map((violator) => (
          <div className="violation-chart-child"> 
            <label>{violator.HasViolation ? "VIOLATION" : "OK"}</label>
          </div>
        )) : null}
       </div>
      <div>
      </div>
    </div>
    </div>


  )
    //   {missingPositions !== null ? 
    //   missingPositions.map((matchup) => (
    //     <div > 
    //       <label>{matchup.Username} (Week {matchup.WeekNumber})</label>
    //       <br />
    //     </div>
    //   )) : <h1 className="collusion-loading-text">Checking for collusion...</h1>}
    // </div>
  // )
    // <div className="missing-starters">
    //   {missingPositions !== null ? 
    //   <div>
    //     <h2 className="missing-starters-text">Missing starters</h2>
    //   </div>
    //    : null}
    //   {missingPositions !== null ? 
    //   missingPositions.map((matchup) => (
    //     <div > 
    //       <label>{matchup.Username} (Week {matchup.WeekNumber})</label>
    //       <br />
    //     </div>
    //   )) : <h1 className="collusion-loading-text">Checking for collusion...</h1>}
    // </div>
  // )
};

Collusion.propTypes = {};

Collusion.defaultProps = {};

export default Collusion;
