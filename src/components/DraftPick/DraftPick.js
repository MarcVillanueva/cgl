import React from 'react';
import styles from './DraftPick.css';

const DraftPick = () => (
  <div className={styles.DraftPick}>
    <label>Player ID</label>
    <br></br>
    <label>Roster name</label>
    <br></br>
    <label>Draft pick number</label>
    <br></br>
  </div>
);

DraftPick.propTypes = {};

DraftPick.defaultProps = {};

export default DraftPick;
