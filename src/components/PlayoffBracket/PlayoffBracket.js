import React, { useEffect, useState} from 'react'
import styles from './PlayoffBracket.css'
import PlayoffRound from '../PlayoffRound/PlayoffRound'

const PlayoffBracket = (props) => {
  const [winnersBracket, setWinnersBracket] = useState(null);
  const [losersBracket, setLosersBracket] = useState(null);
  const [playoffStartWeek, setPlayoffStartWeek] = useState(null);

  useEffect(() => {
    async function getWinnersBracket() {
      const response = await fetch(`https://api.sleeper.app/v1/league/${props.leagueId}/winners_bracket`);
      const winnersBracket = await response.json();
      setWinnersBracket(winnersBracket);
  }
  getWinnersBracket();
  }, [props.leagueId])

    useEffect(() => {
    async function getLosersBracket() {
      const response = await fetch(`https://api.sleeper.app/v1/league/${props.leagueId}/losers_bracket`);
      const losersBracket = await response.json();
      setLosersBracket(losersBracket);
  }
  getLosersBracket();
  }, [props.leagueId])

  useEffect(() => {
    async function getPlayoffStartWeek() {
      const response = await fetch(`https://api.sleeper.app/v1/league/${props.leagueId}`)
      const league = await response.json()
      setPlayoffStartWeek(league.settings.playoff_week_start)
  }
  getPlayoffStartWeek();
  }, [props.leagueId])

  return (
  <div className={styles.PlayoffBracket}>
    <h1>Winner's Bracket</h1>
    {winnersBracket != null ? 
      <div className="playoff-bracket">
        <PlayoffRound leagueId={props.leagueId} playoffStartWeek={playoffStartWeek} playoffRound={1} matchup={winnersBracket.filter(matchup => getNonEliminatedMatchups(matchup, 1))}></PlayoffRound>
        <PlayoffRound leagueId={props.leagueId} playoffStartWeek={playoffStartWeek} playoffRound={2} matchup={winnersBracket.filter(matchup => getNonEliminatedMatchups(matchup, 2))} ></PlayoffRound>
        <PlayoffRound leagueId={props.leagueId} playoffStartWeek={playoffStartWeek} playoffRound={3} matchup={winnersBracket.filter(matchup => matchup.r === 3).length > 0 ? winnersBracket.filter(matchup => getNonEliminatedMatchups(matchup, 3)) : null}> </PlayoffRound>
        <PlayoffRound leagueId={props.leagueId} playoffStartWeek={playoffStartWeek} playoffRound={4} matchup={winnersBracket.filter(matchup => matchup.r === 4).length > 0 ? winnersBracket.filter(matchup => getNonEliminatedMatchups(matchup, 4)) : null}></PlayoffRound>
      </div>
     : null}
  </div>
  )
};

function getNonEliminatedMatchups(matchup, roundNumber) {
  return matchup.r === roundNumber && (matchup.t1_from?.l === undefined || matchup.t2_from?.l === undefined)
}
PlayoffBracket.propTypes = {};

PlayoffBracket.defaultProps = {};

export default PlayoffBracket;
