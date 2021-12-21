import React from 'react';
import styles from './LeagueOptions.css';

const LeagueOptions = () => (
  <div className="league-options">
    <div className="option-button">
      <label >ROSTERS</label>
    </div>
    <div className="option-button">
      <label >DRAFT</label>
    </div>
    <div className="option-button">
      <label >RESULTS</label>
    </div>
    <div className="option-button">
      <label >COLLUSION</label>
    </div>
    <div className="option-button">
      <label >WEEKLYS</label>
    </div>
  </div>

);

LeagueOptions.propTypes = {};

LeagueOptions.defaultProps = {};

export default LeagueOptions;
