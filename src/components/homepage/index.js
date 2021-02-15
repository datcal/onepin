import React, { Component } from 'react';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {render:false};
      }
      componentDidMount() {
        const username = this.props.match.params.username;
        console.log(username);
        /*if(usernameCount.length < 1 ) {
            this.setState({ render: true })
        }*/
      }    
  render() {
    
        if(this.state.render == true){
            return (
                <div>
                    <div className="wrapper">
                            One Pin Home Page
                    </div>
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
       
   
   
  }
}