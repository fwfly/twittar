import React from 'react';

import DashboardLeft from './dashboard_left';
import DashboardCenter from './dashboard_center';
import DashboardRight from './dashboard_right';

export default ()=>{
  return (
    <div>
      <div className="dashboard-main">
        <DashboardLeft />
        <DashboardCenter />
        <DashboardRight />
      </div>
    </div>
  );
}
