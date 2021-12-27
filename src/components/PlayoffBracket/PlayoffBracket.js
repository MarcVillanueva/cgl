import React, { useEffect, useState} from 'react'
import styles from './PlayoffBracket.css'
import Matchup from '../Matchup/Matchup'

const PlayoffBracket = (props) => {
  const [winnersBracket, setWinnersBracket] = useState(null);
  const [losersBracket, setLosersBracket] = useState(null);

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

  console.log(winnersBracket)
  console.log(losersBracket)

  return (
  <div className={styles.PlayoffBracket}>
    <h1>Playoff Bracket</h1>
    <Matchup></Matchup>
  </div>
  )

};

PlayoffBracket.propTypes = {};

PlayoffBracket.defaultProps = {};

export default PlayoffBracket;
