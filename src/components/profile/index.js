/*import React, { Component } from 'react';

export default class Profile extends Component { 
  render() {
        return (
            <div>
                <div className="wrapper">
                    Profile
                </div>
            </div>
        )

  }
}*/

import React from 'react';

const Profile = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Profile;