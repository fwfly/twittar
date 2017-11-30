import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import { connect } from 'react-redux'
import * as trendsAction from '../actions/trendsAction';

class TrendList extends Component{


  componentDidMount(){
    this.props.fetchTrends();
  }


  renderTweetCount(trend){

    if( trend.tweet_volume ){
      return(
        <span className="trends-group-item-info">{"tweets " + trend.tweet_volume.toString()}</span>
      )
    }
    return
  }

  renderTrends(){
    let trends = [];
    if(this.props.trends){
      trends = this.props.trends[0].trends;
      let length = trends.length;
      if (length > 10){
        trends = trends.slice(0, 10);
      }
    }

    return trends.map((trend) => {
      return(
        <li className="trends-group-item">
          <a href={trend.url} className="trends-group-item-head">{trend.name}</a>
          {this.renderTweetCount(trend)}
        </li>
      );
    });
  }

  render(){
    console.log(this.props.trends);
    return (
      <div className="trends-card">
        <ul className="trends-group">
          {this.renderTrends()}
        </ul>
      </div>
    );
  }
}


function mapStateToProps({trends}){
  return {trends};
}

export default connect(mapStateToProps, trendsAction)(TrendList);


