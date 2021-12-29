import React, { useState, useEffect } from 'react'
import DraftOrder from './../DraftOrder/DraftOrder'
const DraftChart = (props) => {
  const [draft, setDraft] = useState(null);
  const [draftPicks, setDraftPicks] = useState(null);

  useEffect(() => {
      async function getDraft(leagueId, year) {
        const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/drafts`);
        const draftList = await response.json();
        const draft = draftList.find(draft => draft.season === year)
        setDraft(draft);
      }
    // TODO: Update to take any season instead of hard-coding 2021
    getDraft(props.leagueId, "2021");
  }, [props.leagueId])

    useEffect(() => {
      async function getDraftPicks(draftId) {
        if (draft?.draft_id) {
          const response = await fetch(`https://api.sleeper.app/v1/draft/${draft.draft_id}/picks`);
          const draftPicks = await response.json();
          setDraftPicks(draftPicks);
        }
      }
    getDraftPicks(draft?.draft_id);
  }, [draft?.draft_id])

  if (draftPicks) {
      draftPicks.sort(function (a, b) {
        return a.draft_slot - b.draft_slot
  });
  }

  return (
  <div>
    <br />
      <DraftOrder order={draft?.draft_order} leagueId={props.leagueId} draftPicks={draftPicks}></DraftOrder>
  </div>
  )
;
}

DraftChart.propTypes = {};

DraftChart.defaultProps = {};

export default DraftChart;
