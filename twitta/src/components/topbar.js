import React from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap';
import '../styles/topbar.css';


export default ()=>{
  return(
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-container">
          <img src="/twitter.png" className="twittar-header" />
          <Nav  bsStyle="pills" >
            <NavItem eventKey={1} className="twittar-text-active">
              <Glyphicon glyph="home" />
              <span className="twittar-btn-text">Home</span>
            </NavItem>
            <NavItem eventKey={2} className="twittar-text">
              <Glyphicon glyph="flash" />
              <span className="twittar-btn-text">News</span>
            </NavItem>
            <NavItem eventKey={3} className="twittar-text">
              <Glyphicon glyph="bell" />
              <span className="twittar-btn-text">Notification</span>
            </NavItem>
            <NavItem eventKey={4} className="twittar-text">
              <Glyphicon glyph="envelope" />
              <span className="twittar-btn-text">Messages</span>
            </NavItem>
          </Nav>
        </div>
      </div>
    </div>
  );
}
