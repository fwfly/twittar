import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import StreamDetail from '../components/Stream_detail';

export default class StreamList extends Component{

  constructor(props){
    super(props);
    this.state = {streamItems: []};
  }


  componentDidMount(){
    fetch('/api/twit/home_timeline')
     .then((res) => res.json())
     .then((jsondata)=>{
       this.setState({ streamItems: jsondata} );
     });
  }

  renderList(){
    let items = this.state.streamItems;
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
