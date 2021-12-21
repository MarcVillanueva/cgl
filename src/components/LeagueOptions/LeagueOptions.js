import React, { useState} from 'react';
import './LeagueOptions.css';

const LeagueOptions = props => {
  const [selectedOption, setSelected] = useState("Rosters");

  return (
  <div className="league-options">
    <div className={selectedOption === "Rosters" ? "option-button-selected" : "option-button"} onClick={() => setSelected("Rosters")}>
      <label >ROSTERS</label>
    </div>
    <div className={selectedOption === "Draft" ? "option-button-selected" : "option-button"} onClick={() => setSelected("Draft")}>
      <label >DRAFT</label>
    </div>
    <div className={selectedOption === "Results" ? "option-button-selected" : "option-button"} onClick={() => setSelected("Results")}>
      <label >RESULTS</label>
    </div>
    <div className={selectedOption === "Collusion" ? "option-button-selected" : "option-button"} onClick={() => setSelected("Collusion")}>
      <label >COLLUSION</label>
    </div>
    <div className={selectedOption === "Weeklys" ? "option-button-selected" : "option-button"} onClick={() => setSelected("Weeklys")}>
      <label >WEEKLYS</label>
    </div>
  </div>
  )
  };

LeagueOptions.propTypes = {};

LeagueOptions.defaultProps = {};

export default LeagueOptions;
