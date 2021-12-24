import React from 'react';
import './DraftPick.css';

const DraftPick = (props) => (
  <div className={`pick-${props.pick.metadata.position}`}>
    <label>{props.pick.pick_no}</label>
    <br></br>
    <label>{props.pick.metadata.first_name}</label>
    <br></br>
    <label>{props.pick.metadata.last_name}</label>
    <br></br>
    <label>{props.pick.metadata.team}</label>
    <br></br>
  </div>
);

DraftPick.propTypes = {};

DraftPick.defaultProps = {};

export default DraftPick;
