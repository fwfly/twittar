import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as profileAction from '../actions/profileAction';


class ProfileDetail extends Component{


  componentDidMount(){
    this.props.fetchProfile();
  }

  render(){

    let profileImage = "";
    let name = "";
    let screenName = "";
    if( this.props.profile ){
      let profile = this.props.profile;
      profileImage = profile.profile_image_url_https;
      name = profile.name;
      screenName = profile.screen_name;
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
