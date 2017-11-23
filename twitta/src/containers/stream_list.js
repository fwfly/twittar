import React, {Component} from 'react';


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
          <li>
            {item.text}
          </li>
        );
      });

    }
  }

  render(){
    return (
      <div className="stream">
        <ol>
          {this.renderList()}
        </ol>
      </div>
    );
  }
}
