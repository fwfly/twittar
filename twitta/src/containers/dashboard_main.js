import React from 'react';

import DashboardLeft from './dashboard_left';
import DashboardCenter from './dashboard_center';
import DashboardRight from './dashboard_right';

export default ()=>{
  return (
    <div className="main-dashboard">
      this is main dashsboard
      <DashboardLeft />
      <DashboardCenter />
      <DashboardRight />
    </div>
  );
}
