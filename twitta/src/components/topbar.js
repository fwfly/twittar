import React from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap';
import '../styles/topbar.css';


export default ()=>{
  return(
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-container">
          <Nav  bsStyle="pills" >
            <NavItem eventKey={1}><Glyphicon glyph="home" />Home</NavItem>
            <NavItem eventKey={2}><Glyphicon glyph="flash" />News</NavItem>
            <NavItem eventKey={3}><Glyphicon glyph="bell" />Notification</NavItem>
            <NavItem eventKey={4}><Glyphicon glyph="envelope" />Messages</NavItem>
          </Nav>
        </div>
      </div>
    </div>
  );
}
