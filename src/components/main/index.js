import React, { Component } from 'react';
import axios from 'axios';


export default class Main extends Component {
  
    constructor(props) {
        super(props);
    
        ///this.deleteExercise = this.deleteExercise.bind(this)
    
        this.state = {user: []};
      }
    componentDidMount() {
        axios.get(process.env.REACT_APP_URL+'/users/datcal')
          .then(response => {
              console.log(response);
            this.setState({ user: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

  render() {
      console.log(this.state);
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
                  <a  className="d-block rounded-0 mt-2 mb-2 pt-2 pb-2 w-100 btn btn-danger">My Portfolio</a>
                  <a  className="d-block rounded-0 mt-2 mb-2 pt-2 pb-2 w-100 btn btn-danger">My Portfolio</a>
                  <a  className="d-block rounded-0 mt-2 mb-2 pt-2 pb-2 w-100 btn btn-danger">My Portfolio</a>
                  <a  className="d-block rounded-0 mt-2 mb-2 pt-2 pb-2 w-100 btn btn-danger">My Portfolio</a>
              </div>
          </div>
      </div>
    )
  }
}