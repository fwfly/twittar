import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

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
            <div className="tweet-content">
              <div className="content">
                <div className="content-header">
                  <span className="fullname">{item.user.name}</span>
                  <span> </span>
                  <span className="username">{"@" + item.user.screen_name}</span>
                </div>
                <div className="content-text">
                  {item.text}
                </div>
              </div>
            </div>
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
