import React, { useState, useEffect } from 'react'
import styles from './DraftChart.css'
import DraftPick from './../DraftPick/DraftPick'
import { Link } from 'react-router-dom'
const DraftChart = (props) => {
  const [draftId, setDraftId] = useState(null);
  const [draftPicks, setDraftPicks] = useState(null);

  useEffect(() => {
      async function getDraftId(leagueId, year) {
        const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/drafts`);
        const draftList = await response.json();
        const draft = draftList.find(draft => draft.season === year)
        setDraftId(draft.draft_id);
      }
    // TODO: Update to take any season instead of hard-coding 2021
    getDraftId(props.leagueId, "2021");
  }, [props.leagueId])

    useEffect(() => {
      async function getDraftPicks(draftId) {
        if (draftId) {
          const response = await fetch(`https://api.sleeper.app/v1/draft/${draftId}/picks`);
          const draftPicks = await response.json();
          setDraftPicks(draftPicks);
        }
      }
    getDraftPicks(draftId);
  }, [draftId])

  return (
  <div className={styles.DraftChart}>
      {draftPicks != null ? 
      draftPicks.map((pick) => (
          <div> 
            <Link
            className = "pick-link"
            to={{
              pathname: `/`
            }}>
              <div>
                <DraftPick pick={pick}></DraftPick>
              </div>
        </Link>
          </div>
      )) : null}
  </div>
  )
;
}

DraftChart.propTypes = {};

DraftChart.defaultProps = {};

export default DraftChart;
