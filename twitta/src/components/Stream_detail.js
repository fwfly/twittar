import React, {Component} from 'react';
import { Image, Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

// comment retweet heart-empty glyphicon-send

export default class StreamDetail extends Component {

  constructor(props){
    super(props);

    this.renderEntities = this.renderEntities.bind(this);
  }

  renderEntities(){
    let entities = this.props.stream_data.entities
    let medias = entities.media;
    let hashtag = entities.hashtag;
    let urls = entities.urls;

    if( typeof medias !== 'undefined'){
      return medias.map((media)=>{
        return <Image src={media.media_url_https}  style={ {width:"100%"} }/>
      });
    } else if ( typeof urls !== 'undefined' ){
      return urls.map((url) =>{
        return (
            <div>
              <a href={url.expanded_url}>{url.expanded_url}</a>
            </div>
        );
      });
    }
  }

  render(){

    let item = this.props.stream_data;
    let favorite_count = this.props.stream_data.favorite_count;
    let retweet_count = this.props.stream_data.retweet_count;
    let profile_img = this.props.stream_data.user.profile_image_url;

    return(
      <div className="tweet-content">
        <div className="content">
          <div className="content-header">
            <img src={profile_img} className="profile-img" />
            <span className="fullname">{item.user.name}</span>
            <span> </span>
            <span className="username">{"@" + item.user.screen_name}</span>
          </div>
          <div className="content-body">
            {item.text}
            {this.renderEntities()}
          </div>
          <div className="content-footer">
            <Button bsSize="xsmall" className="twittar-btn">
              <Glyphicon glyph="comment" />
            </Button>
            <Button bsSize="xsmall" className="twittar-btn">
              <Glyphicon glyph="retweet" />
              <span className="twittar-btn-text">{retweet_count}</span>
            </Button>
            <Button bsSize="xsmall" className="twittar-btn">
              <Glyphicon glyph="heart-empty" />
              <span className="twittar-btn-text">{favorite_count}</span>
            </Button>
            <Button bsSize="xsmall" className="twittar-btn"><Glyphicon glyph="send" /></Button>
          </div>
        </div>
      </div>
    );
  }
}
