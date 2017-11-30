import React from 'react';

import ProfileDetail from '../containers/ProfileDetail';
import TrendList from '../containers/TrendList';

export default ()=>{
  return(
    <div className="dashboard">
      <ProfileDetail />
      <TrendList />
    </div>
  );
}
