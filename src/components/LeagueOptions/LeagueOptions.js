import React, { useState, useEffect } from 'react'
import './LeagueOptions.css'

const LeagueOptions = props => {

  return (
  <div className="league-options">
    <div className={props.selectedOption === "Rosters" ? "option-button-selected" : "option-button"} onClick={() => props.setSelected("Rosters")}>
      <label >ROSTERS</label>
    </div>
    <div className={props.selectedOption === "Draft" ? "option-button-selected" : "option-button"} onClick={() => props.setSelected("Draft")}>
      <label >DRAFT</label>
    </div>
    <div className={props.selectedOption === "Results" ? "option-button-selected" : "option-button"} onClick={() => props.setSelected("Results")}>
      <label >RESULTS</label>
    </div>
    <div className={props.selectedOption === "Collusion" ? "option-button-selected" : "option-button"} onClick={() => props.setSelected("Collusion")}>
      <label >COLLUSION</label>
    </div>
    <div className={props.selectedOption === "Weeklys" ? "option-button-selected" : "option-button"} onClick={() => props.setSelected("Weeklys")}>
      <label >WEEKLYS</label>
    </div>
  </div>
  )
  };

LeagueOptions.propTypes = {};

LeagueOptions.defaultProps = {};

export default LeagueOptions;
