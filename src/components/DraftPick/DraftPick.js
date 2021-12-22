import React from 'react';
import styles from './DraftPick.css';

const DraftPick = (props) => (
  <div className={styles.DraftPick}>
    <label>{props.pick.pick_no}</label>
    <br></br>
    <label>{props.pick.metadata.last_name}</label>
    <br></br>
    <label>{props.pick.metadata.first_name}</label>
    <br></br>
    <label>{props.pick.metadata.position}</label>
    <br></br>
  </div>
);

DraftPick.propTypes = {};

DraftPick.defaultProps = {};

export default DraftPick;
