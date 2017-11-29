import React, {Component} from 'react';
import { connect } from 'react-redux';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import * as profileAction from '../actions/profileAction';


class ProfileDetail extends Component{


  componentDidMount(){
    this.props.fetchProfile();
  }

  render(){

    let profileImage = "";
    let name = "";
    let screenName = "";
    let followersCount = 0;
    let favouritesCount = 0;
    let tweetsCount = 0;

    if( this.props.profile ){
      let profile = this.props.profile;
      profileImage = profile.profile_image_url_https;
      name = profile.name;
      screenName = profile.screen_name;
      followersCount = profile.followers_count;
      favouritesCount = profile.favourites_count;
      tweetsCount = profile.statuses_count;
    }

    return (
      <div className="profile-card">
        <div className="profile-card-bg"></div>
        <div className="profile-card-content">
          <div className="profile-avatar-content">
            <div className="profile-photo">
              <img src={profileImage}>
              </img>
            </div>
          </div>
          <div  className="profile-user">
            <div className="profile-name">
              <a>{name}</a>
            </div>
            <a className="username">{"@" + screenName}</a>
          </div>
          <div className="profile-status">
            <ul className="status-group">
              <li className="status-group-item">
                <span className="status-head" >Tweets</span>
                <span className="status-count" >{tweetsCount}</span>
              </li>
              <li className="status-group-item">
                <span className="status-head">Following</span>
                <span className="status-count">{followersCount}</span>
              </li>
              <li className="status-group-item">
                <span className="status-head">Followings</span>
                <span className="status-count">{favouritesCount}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps( { profile } ){
  return { profile }
}

export default connect(mapStateToProps, profileAction)(ProfileDetail);
