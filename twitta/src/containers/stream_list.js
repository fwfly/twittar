import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';
import StreamDetail from '../components/Stream_detail';

class StreamList extends Component{

  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.props.fetchStream();
  }

  renderList(){
    let items = this.props.streams;
    if(!items){
      return "loading";
    }
    else{
      return items.map((item) => {
        return(
          <ListGroupItem>
            <StreamDetail stream_data={item} />
          </ListGroupItem>
        );
      });

    }
  }

  render(){
    return (
      <div className="stream">
        <ListGroup>
          {this.renderList()}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps( {streams} ){
  return {streams};
}

export default connect(mapStateToProps, actions)(StreamList);
