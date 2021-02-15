import React, { Component } from 'react';


export default class Main extends Component {
  
  render() {
    return (
      <div>
          <div class="wrapper">
            <div class="resim">
                <img src="./images/loginbg.jpg" />
            </div>
            <h1 class="text-center">Burak Hamza i <i class="fa fa-check-circle" aria-hidden="true"></i></h1>
            <h4 class="text-center">@paul</h4>
            <p class="text-center mt-4">Designer, Front End Developer, WordPress Developer. Judoka.</p>

          </div>
          <div class="buttons">
              <div class="mb-2 mt-2 text-center">
                  <a href="javascript:;" class="d-block rounded-0 mt-2 mb-2 pt-2 pb-2 w-100 btn btn-danger">My Portfolio</a>
                  <a href="javascript:;" class="d-block rounded-0 mt-2 mb-2 pt-2 pb-2 w-100 btn btn-danger">My Portfolio</a>
                  <a href="javascript:;" class="d-block rounded-0 mt-2 mb-2 pt-2 pb-2 w-100 btn btn-danger">My Portfolio</a>
                  <a href="javascript:;" class="d-block rounded-0 mt-2 mb-2 pt-2 pb-2 w-100 btn btn-danger">My Portfolio</a>
                  <a href="javascript:;" class="d-block rounded-0 mt-2 mb-2 pt-2 pb-2 w-100 btn btn-danger">My Portfolio</a>
              </div>
          </div>
      </div>
    )
  }
}