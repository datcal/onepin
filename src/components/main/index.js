import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LinkItem = props => (
    <a 
    className="d-block rounded-0 mt-2 mb-2 pt-2 pb-2 w-100 btn btn-danger" 
    href={props.link.url}
    target="_blank"
    >{props.link.title}</a> 
  )

export default class Main extends Component {
  
    constructor(props) {
        super(props);
        
        this.state = {user: [],links: []};
    
      }
    componentDidMount() {
        axios.get(process.env.REACT_APP_URL+'/users/datcal')
          .then(response => {
            this.setState({ user: response.data })
          })
          .catch((error) => {
            console.log(error);
          })

          axios.get(process.env.REACT_APP_URL+'/links/datcal')
          .then(response => {
            this.setState({ links: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      LinkList() {
        return this.state.links.map(currentlink => {
          return <LinkItem link={currentlink}  key={currentlink._id}/>;
        })
      }

  render() {
    return (
      <div>
          <div className="wrapper">
            <div className="resim">
                <img src={this.state.user.image} />
            </div>
            <h1 className="text-center">{this.state.user.flname} <i className="fa fa-check-circle" aria-hidden="true"></i></h1>
            <h4 className="text-center">@{this.state.user.username}</h4>
            <p className="text-center mt-4">{this.state.user.description}</p>

          </div>
          <div className="buttons">
              <div className="mb-2 mt-2 text-center">
              { this.LinkList() }
               
              </div>
          </div>
      </div>
    )
  }
}