import React from 'react';

export default ()=>{
  return(
    <div className="dashboard-right">
      <div className="about-card">
        <div className="trends-card-header">
          <h3>About</h3>
        </div>
        <ul className="trends-group">
          <li className="trends-group-item">
            <span className="about-description">Why called twittar ? It is a twitter clone website. Following techinich are used in this wbsite</span>
            <a href="http://expressjs.com" className="about-card-tech-link">Express</a>
            <a href="https://react-bootstrap.github.io/" className="about-card-tech-link">React Bootstrap</a>
            <a href="https://reactjs.org/" className="about-card-tech-link">React</a>
            <a href="https://github.com/reactjs/redux" className="about-card-tech-link">Redux</a>
          </li>
          <li className="trends-group-item">
            <a href="https://github.com/fwfly/twittar" className="trends-group-item-head">Github</a>
          </li>
          <li className="trends-group-item">
            <a href="https://github.com/fwfly/twittar/issues" className="trends-group-item-head">Report Issue</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
