import React from 'react'
import styles from './DraftChart.css'
import DraftPick from './../DraftPick/DraftPick'

const DraftChart = (props) => {
  console.log("League ID: " + props.leagueId)
  return (
  <div className={styles.DraftChart}>
    <DraftPick></DraftPick>
  </div>
  )
;
}

DraftChart.propTypes = {};

DraftChart.defaultProps = {};

export default DraftChart;
