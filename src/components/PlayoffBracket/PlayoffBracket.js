import React from 'react'
import styles from './PlayoffBracket.css'
import Matchup from '../Matchup/Matchup'

const PlayoffBracket = () => (
  <div className={styles.PlayoffBracket}>
    <h1>Playoff Bracket</h1>
    <Matchup></Matchup>
  </div>
);

PlayoffBracket.propTypes = {};

PlayoffBracket.defaultProps = {};

export default PlayoffBracket;
