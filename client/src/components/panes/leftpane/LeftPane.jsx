import { useState } from 'react';
import LeftPaneTabs from './LeftPaneTabs';
import PlannerLayout from './planner/PlannerLayout';
import ScheduleLayout from './schedule/ScheduleLayout';
import classes from '../Pane.module.css';

function LeftPane({ studentClassesTaken }) {
  const [tab, setTab] = useState('Degree Planner');

  return (
    <div className={classes.pane}>
      <LeftPaneTabs setTab={setTab} />
      {tab === 'Degree Planner' &&
        <PlannerLayout studentClassesTaken={studentClassesTaken} />
      }
      {tab === 'Quarter Schedule' &&
        <ScheduleLayout />
      }
    </div>
  );
}

export default LeftPane;
