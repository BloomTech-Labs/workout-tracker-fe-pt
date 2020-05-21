import React from 'react';
import Scheduler from './Scheduler';
import Progress from './Progress';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();

  return (
    <div>
      <div className="dashboard_main">
        <h1 className="dashboard_header">Dashboard</h1>
      </div>
      <Scheduler />
      <Progress />
      <button
        style={{ marginTop: '50px' }}
        type="submit"
        className="dashboard_btn"
        onClick={() => history.push('/schedule')}
      >
        Schedule
      </button>
    </div>
  );
};

export default Dashboard;
