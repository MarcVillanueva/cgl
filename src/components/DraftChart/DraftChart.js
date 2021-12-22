import React, { useState, useEffect } from 'react'
import styles from './DraftChart.css'
import DraftPick from './../DraftPick/DraftPick'

const DraftChart = (props) => {
  const [draft, setDraft] = useState(null);

  useEffect(() => {
      async function getDrafts(leagueId, year) {
        const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/drafts`);
        const draftList = await response.json();
        var draft = draftList.find(draft => draft.season === year)
        setDraft(draft);
      }

    // TODO: Update to take any season instead of hard-coding 2021
    getDrafts(props.leagueId, "2021");
  }, [props.leagueId])

  console.log(draft);
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
